import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import demandeurService from './demandeurService' // Assurez-vous d'avoir le service correspondant

const initialState = {
  demandeurs: [],
  demandeur: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createDemandeur = createAsyncThunk(
  'demandeur/createDemandeur',
  async (demandeurData, thunkAPI) => {
    try {
      return await demandeurService.createDemandeur(demandeurData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getDemandeurs = createAsyncThunk(
  'demandeur/getDemandeurs',
  async (_, thunkAPI) => {
    try {
      return await demandeurService.getDemandeurs()
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

export const getDemandeur = createAsyncThunk(
  'demandeur/getDemandeur',
  async (id, thunkAPI) => {
    try {
      return await demandeurService.getDemandeur(id)
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

export const updateDemandeur = createAsyncThunk(
  'demandeur/updateDemandeur',
  async ({ id, demandeurData }, thunkAPI) => {
    try {
      return await demandeurService.updateDemandeur(id, demandeurData)
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

export const deleteDemandeur = createAsyncThunk(
  'demandeur/deleteDemandeur',
  async (id, thunkAPI) => {
    try {
      await demandeurService.deleteDemandeur(id)
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

export const demandeurSlice = createSlice({
  name: 'demandeur',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDemandeur.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createDemandeur.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createDemandeur.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getDemandeurs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDemandeurs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.demandeurs = action.payload
      })
      .addCase(getDemandeurs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.demandeurs = null
      })
      .addCase(getDemandeur.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDemandeur.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.demandeur = action.payload
      })
      .addCase(getDemandeur.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.demandeur = null
      })
      .addCase(updateDemandeur.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateDemandeur.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.demandeur = action.payload
      })
      .addCase(updateDemandeur.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteDemandeur.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteDemandeur.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (Array.isArray(state.demandeurs)) {
          state.demandeurs = state.demandeurs.filter(
            (demandeur) => demandeur.id !== action.payload,
          )
        }
      })
      .addCase(deleteDemandeur.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = demandeurSlice.actions
export default demandeurSlice.reducer
