import { create } from "zustand";
import * as DocumentPicker from 'expo-document-picker';

interface UploadState {
    selectedFile: DocumentPicker.DocumentPickerAsset | null;
    setSelectedFile: (file: DocumentPicker.DocumentPickerAsset | null) => void;
}

export const useUploadStore = create<UploadState>((set) => ({
    selectedFile: null,
    setSelectedFile: (file) => set({ selectedFile: file }),
}));