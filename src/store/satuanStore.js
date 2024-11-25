import { create } from 'zustand';

export const useSatuanStore = create((set) => ({
    satuan: null,
    setSatuan: (satuan) => set({ satuan }),
    removeSatuan: () => set({ satuan: null }),
}));