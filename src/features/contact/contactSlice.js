import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contactService from './contactService' // Assurez-vous d'avoir le service correspondant

const initialState = {
  contacts: [],
  contact: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createContact = createAsyncThunk(
  'contact/createContact',
  async (contactData, thunkAPI) => {
    try {
      return await contactService.createContact(contactData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getContacts = createAsyncThunk(
  'contact/getContacts',
  async (_, thunkAPI) => {
    try {
      return await contactService.getContacts()
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

export const getContact = createAsyncThunk(
  'contact/getContact',
  async (id, thunkAPI) => {
    try {
      return await contactService.getContact(id)
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

export const updateContact = createAsyncThunk(
  'contact/updateContact',
  async ({ id, contactData }, thunkAPI) => {
    try {
      return await contactService.updateContact(id, contactData)
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

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, thunkAPI) => {
    try {
      await contactService.deleteContact(id)
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

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createContact.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getContacts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contacts = action.payload
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.contacts = null
      })
      .addCase(getContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contact = action.payload
      })
      .addCase(getContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.contact = null
      })
      .addCase(updateContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contact = action.payload
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (Array.isArray(state.contacts)) {
          state.contacts = state.contacts.filter(
            (contact) => contact.id !== action.payload,
          )
        }
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = contactSlice.actions
export default contactSlice.reducer
