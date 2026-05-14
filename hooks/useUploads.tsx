import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system/legacy';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        if (result.assets && result.assets.length > 0) {
          const permanentdirectory = FileSystem.documentDirectory + result.assets[0].name;

          try {
            await FileSystem.copyAsync({
              from: result.assets[0].uri,
              to: permanentdirectory,
            });

            const fileData = {
              name: result.assets[0].name,
              uri: permanentdirectory,
              size: result.assets[0].size,
              mimeType: result.assets[0].mimeType,
              lastModified: result.assets[0].lastModified,
            };
            await AsyncStorage.setItem('uploadedFile', JSON.stringify(fileData));
            setMessage('File copied to permanent directory successfully!');
            
          } catch (error) {
            console.error('Error copying file: ', error);
            setMessage('Error occurred while copying file.');
          }
        }

        setSelectedFile(result.assets[0]);
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
