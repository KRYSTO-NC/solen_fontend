import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import typeInstallationService from './typeInstallationService'

const initialState = {
  typeInstallations: [],
  typeInstallation: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createTypeInstallation = createAsyncThunk(
  'typeInstallation/createTypeInstallation',
  async (typeInstallationData, thunkAPI) => {
    try {
      return await typeInstallationService.createTypeInstallation(
        typeInstallationData,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const getTypeInstallations = createAsyncThunk(
  'typeInstallation/getTypeInstallations',
  async (_, thunkAPI) => {
    try {
      return await typeInstallationService.getTypeInstallations()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const getTypeInstallation = createAsyncThunk(
  'typeInstallation/getTypeInstallation',
  async (id, thunkAPI) => {
    try {
      return await typeInstallationService.getTypeInstallation(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const updateTypeInstallation = createAsyncThunk(
  'typeInstallation/updateTypeInstallation',
  async (data, thunkAPI) => {
    try {
      return await typeInstallationService.updateTypeInstallation(
        data.id,
        data.typeInstallationData,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteTypeInstallation = createAsyncThunk(
  'typeInstallation/deleteTypeInstallation',
  async (id, thunkAPI) => {
    try {
      await typeInstallationService.deleteTypeInstallation(id)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const typeInstallationSlice = createSlice({
  name: 'typeInstallation',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTypeInstallation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTypeInstallation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.typeInstallations.push(action.payload)
      })
      .addCase(createTypeInstallation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTypeInstallations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTypeInstallations.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.typeInstallations = action.payload
      })
      .addCase(getTypeInstallations.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTypeInstallation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTypeInstallation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.typeInstallation = action.payload
      })
      .addCase(getTypeInstallation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateTypeInstallation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateTypeInstallation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.typeInstallations = state.typeInstallations.map(
          (typeInstallation) =>
            typeInstallation.id === action.payload.id
              ? action.payload
              : typeInstallation,
        )
      })
      .addCase(updateTypeInstallation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTypeInstallation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTypeInstallation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.typeInstallations = state.typeInstallations.filter(
          (typeInstallation) => typeInstallation.id !== action.payload,
        )
      })
      .addCase(deleteTypeInstallation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = typeInstallationSlice.actions
export default typeInstallationSlice.reducer
