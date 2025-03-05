import {
  addListener,
  configureStore,
  createListenerMiddleware,
  type TypedAddListener,
  type TypedStartListening,
} from '@reduxjs/toolkit'

const listenerMiddleware = createListenerMiddleware({
  onError: () => console.error,
})

export const store = configureStore({
  reducer: {},
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStartListening = TypedStartListening<RootState, AppDispatch>

export const startAppListening = listenerMiddleware.startListening as AppStartListening

export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>
