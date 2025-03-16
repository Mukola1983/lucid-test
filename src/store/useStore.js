import { create } from 'zustand';

const useStore = create((set) => ({
    count: 0,
    formulas: null,
    mainValue: [
        {
               "name": "name 43",
               "category": "category 43",
               "value": 16,
               "id": "43",
               "inputs": "hello "
           },
        {
            "name": "name 44",
            "category": "category 43",
            "value": 16,
            "id": "44",
            "inputs": "hello "
        },
    ],

    setMainValue: (data) => set({ mainValue: data }),
    setFormulas: (data) => set({ formulas: data }),
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
