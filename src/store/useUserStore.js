import { create } from 'zustand';

const useUserStore = create((set) => ({
  users: [],
  likedUserIds: [],
  setUsers: (users) => set({ users }),

  toggleLike: (id) =>
    set((state) => ({
      likedUserIds: state.likedUserIds.includes(id)
        ? state.likedUserIds.filter((uid) => uid !== id)
        : [...state.likedUserIds, id],
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
      likedUserIds: state.likedUserIds.filter((uid) => uid !== id),
    })),

  addUser: (newUser) =>
    set((state) => ({
      users: [...state.users, newUser],
    })),
}));

export default useUserStore;
