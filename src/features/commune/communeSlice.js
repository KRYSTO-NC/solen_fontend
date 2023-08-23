import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import communeService from './communeService' // Assurez-vous d'avoir le service correspondant

const initialState = {
  communes: [],
  commune: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createCommune = createAsyncThunk(
  'commune/createCommune',
  async (communeData, thunkAPI) => {
    try {
      return await communeService.createCommune(communeData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getCommunes = createAsyncThunk(
  'commune/getCommunes',
  async (_, thunkAPI) => {
    try {
      return await communeService.getCommunes()
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

export const getCommune = createAsyncThunk(
  'commune/getCommune',
  async (id, thunkAPI) => {
    try {
      return await communeService.getCommune(id)
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

export const updateCommune = createAsyncThunk(
  'commune/updateCommune',
  async ({ id, communeData }, thunkAPI) => {
    try {
      return await communeService.updateCommune(id, communeData)
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

export const deleteCommune = createAsyncThunk(
  'commune/deleteCommune',
  async (id, thunkAPI) => {
    try {
      await communeService.deleteCommune(id)
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

export const communeSlice = createSlice({
  name: 'commune',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCommune.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCommune.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createCommune.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCommunes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommunes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.communes = action.payload
      })
      .addCase(getCommunes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.communes = null
      })
      .addCase(getCommune.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommune.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.commune = action.payload
      })
      .addCase(getCommune.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.commune = null
      })
      .addCase(updateCommune.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateCommune.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.commune = action.payload
      })
      .addCase(updateCommune.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCommune.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCommune.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (Array.isArray(state.communes)) {
          state.communes = state.communes.filter(
            (commune) => commune.id !== action.payload,
          )
        }
      })
      .addCase(deleteCommune.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = communeSlice.actions
export default communeSlice.reducer
