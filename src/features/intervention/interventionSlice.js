import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import interventionService from './interventionService' // Assurez-vous d'avoir le service correspondant

const initialState = {
  interventions: [],
  intervention: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createIntervention = createAsyncThunk(
  'intervention/createIntervention',
  async (interventionData, thunkAPI) => {
    try {
      return await interventionService.createIntervention(interventionData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getInterventions = createAsyncThunk(
  'intervention/getInterventions',
  async (_, thunkAPI) => {
    try {
      return await interventionService.getInterventions()
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getIntervention = createAsyncThunk(
  'intervention/getIntervention',
  async (id, thunkAPI) => {
    try {
      return await interventionService.getIntervention(id)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const updateIntervention = createAsyncThunk(
  'intervention/updateIntervention',
  async (data, thunkAPI) => {
    try {
      return await interventionService.updateIntervention(
        data.id,
        data.interventionData,
      )
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const deleteIntervention = createAsyncThunk(
  'intervention/deleteIntervention',
  async (id, thunkAPI) => {
    try {
      await interventionService.deleteIntervention(id)
      return id
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const interventionSlice = createSlice({
  name: 'intervention',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createIntervention.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createIntervention.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.interventions.push(action.payload)
      })
      .addCase(createIntervention.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getInterventions.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getInterventions.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.interventions = action.payload
      })
      .addCase(getInterventions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getIntervention.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getIntervention.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.intervention = action.payload
      })
      .addCase(getIntervention.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateIntervention.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateIntervention.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.interventions = state.interventions.map((intervention) =>
          intervention.id === action.payload.id ? action.payload : intervention,
        )
      })
      .addCase(updateIntervention.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteIntervention.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteIntervention.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.interventions = state.interventions.filter(
          (intervention) => intervention.id !== action.payload,
        )
      })
      .addCase(deleteIntervention.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = interventionSlice.actions
export default interventionSlice.reducer
