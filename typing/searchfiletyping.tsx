import { Ionicons } from '@expo/vector-icons';

export interface searchfiletyping {
    texinput: string;
    func: () => void;
}

export interface CardsFilesProps {
  // Define any props if needed
  Title: string;
  description: string;
  Date: string;
  categories: string;
  size: string;
  event: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  type?: string;
}