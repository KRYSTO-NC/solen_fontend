import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import installationService from './installationServcice' // Assurez-vous d'avoir le service correspondant

const initialState = {
  installations: [],
  installation: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createInstallation = createAsyncThunk(
  'installation/createInstallation',
  async (installationData, thunkAPI) => {
    try {
      return await installationService.createInstallation(installationData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getInstallations = createAsyncThunk(
  'installation/getInstallations',
  async (_, thunkAPI) => {
    try {
      return await installationService.getInstallations()
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

export const getInstallation = createAsyncThunk(
  'installation/getInstallation',
  async (id, thunkAPI) => {
    try {
      return await installationService.getInstallation(id)
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

export const updateInstallation = createAsyncThunk(
  'installation/updateInstallation',
  async ({ id, installationData }, thunkAPI) => {
    try {
      return await installationService.updateInstallation(id, installationData)
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

export const deleteInstallation = createAsyncThunk(
  'installation/deleteInstallation',
  async (id, thunkAPI) => {
    try {
      await installationService.deleteInstallation(id)
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

export const installationSlice = createSlice({
  name: 'installation',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInstallation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createInstallation.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createInstallation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getInstallations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getInstallations.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.installations = action.payload
      })
      .addCase(getInstallations.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.installations = null
      })
      .addCase(getInstallation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getInstallation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.installation = action.payload
      })
      .addCase(getInstallation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.installation = null
      })
      .addCase(updateInstallation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateInstallation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.installation = action.payload
      })
      .addCase(updateInstallation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteInstallation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteInstallation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (Array.isArray(state.installations)) {
          state.installations = state.installations.filter(
            (installation) => installation.id !== action.payload,
          )
        }
      })
      .addCase(deleteInstallation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = installationSlice.actions
export default installationSlice.reducer
