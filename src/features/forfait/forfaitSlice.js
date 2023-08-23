import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import forfaitService from './forfaitService' // Assurez-vous d'avoir le service correspondant

const initialState = {
  forfaits: [],
  forfait: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createForfait = createAsyncThunk(
  'forfait/createForfait',
  async (forfaitData, thunkAPI) => {
    try {
      return await forfaitService.createForfait(forfaitData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getForfaits = createAsyncThunk(
  'forfait/getForfaits',
  async (_, thunkAPI) => {
    try {
      return await forfaitService.getForfaits()
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

export const getForfait = createAsyncThunk(
  'forfait/getForfait',
  async (id, thunkAPI) => {
    try {
      return await forfaitService.getForfait(id)
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

export const updateForfait = createAsyncThunk(
  'forfait/updateForfait',
  async ({ id, forfaitData }, thunkAPI) => {
    try {
      return await forfaitService.updateForfait(id, forfaitData)
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

export const deleteForfait = createAsyncThunk(
  'forfait/deleteForfait',
  async (id, thunkAPI) => {
    try {
      await forfaitService.deleteForfait(id)
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

export const forfaitSlice = createSlice({
  name: 'forfait',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createForfait.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createForfait.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createForfait.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getForfaits.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getForfaits.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forfaits = action.payload
      })
      .addCase(getForfaits.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.forfaits = null
      })
      .addCase(getForfait.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getForfait.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forfait = action.payload
      })
      .addCase(getForfait.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.forfait = null
      })
      .addCase(updateForfait.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateForfait.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forfait = action.payload
      })
      .addCase(updateForfait.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteForfait.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteForfait.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (Array.isArray(state.forfaits)) {
          state.forfaits = state.forfaits.filter(
            (forfait) => forfait.id !== action.payload,
          )
        }
      })
      .addCase(deleteForfait.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = forfaitSlice.actions
export default forfaitSlice.reducer
