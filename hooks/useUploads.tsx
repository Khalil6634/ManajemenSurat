import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';

const useUploads = () => {
  const [selectedFile, setSelectedFile] = useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Anda bisa spesifik seperti "image/*" atau "application/pdf"
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        setSelectedFile(result.assets[0]);
        setMessage('File selected successfully!');
        setIsUploading(true);
      }
    } catch (err) {
      console.log('Error picking file: ', err);
      setMessage('Error occurred while selecting file.');
    }
  };

  return { selectedFile, pickFile, message, isUploading };
};

export default useUploads;
