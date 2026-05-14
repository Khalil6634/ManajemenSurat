import { useEffect, useState } from 'react';
import { View, Text, Alert, Button, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import CardsFiles from 'components/cardsfiles';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import useUploads from 'hooks/useUploads';

const uploadscreens = () => {
  const { selectedFile, pickFile, message, isUploading } = useUploads();

  useEffect(() => {
    if (isUploading) {
      Alert.alert('Upload Status', message);
      console.log('Selected File:', selectedFile?.mimeType);
    }
  }, [selectedFile]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          width: '90%',
          height: '30%',
          backgroundColor: '#bfdbfe',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={pickFile}>
        <View
          style={{
            padding: 15,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            gap: 10,
          }}>
          <Ionicons name="cloud-upload" size={80} color="#2563eb" />
          <Text style={{ color: '#2563eb', fontWeight: 'bold', fontSize: 14 }}>
            Pick a File docx, pdf, excel
          </Text>
        </View>
      </TouchableOpacity>
      <SafeAreaView style={{ marginTop: 20, width: '90%' }}>
        {selectedFile && (
          <CardsFiles
            Title={selectedFile.name}
            Date={
              selectedFile.lastModified
                ? new Date(selectedFile.lastModified).toLocaleDateString()
                : 'Unknown'
            }
            categories={selectedFile.mimeType || 'Unknown'}
            description={`Size: ${(selectedFile.size ? selectedFile.size / (1024 * 1024) : 0).toFixed(2)} MB`}
            size={`${(selectedFile.size ? selectedFile.size / (1024 * 1024) : 0).toFixed(2)} MB`}
            event={() => Alert.alert('File Selected', `You selected: ${selectedFile.name}`)}
            icon="document"
          />
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default uploadscreens;
