import { configureStore } from "@reduxjs/toolkit";
import exercisingResultSlice from "@/features/exercisingResultSlice";

export const store = configureStore({
  reducer: {
    exercisingResult: exercisingResultSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
