import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import benneficiaireReducer from '../features/benneficiare/benneficiareSlice'
import communeReducer from '../features/commune/communeSlice'
import compagnyReducer from '../features/compagny/compagnySlice'
import contactReducer from '../features/contact/contactSlice'
import demandeurReducer from '../features/demandeur/demandeurSlice'
import forfaitReducer from '../features/forfait/forfaitSlice'
import installationReducer from '../features/installation/installationSlice'
import interventionReducer from '../features/intervention/interventionSlice'
import origineReducer from '../features/origine/origineSlice'
import typeInstallationReducer from '../features/typeInstallation/typeInstallationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    benneficiaire: benneficiaireReducer,
    commune: communeReducer,
    compagny: compagnyReducer,
    contact: contactReducer,
    demandeur: demandeurReducer,
    forfait: forfaitReducer,
    installation: installationReducer,
    typeInstallation: typeInstallationReducer,
    intervention: interventionReducer,
    origine: origineReducer,
  },
})
