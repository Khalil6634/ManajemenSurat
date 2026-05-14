import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native';
import AppBar from '../components/appBar';
import { useUploadStore } from 'zustand/UploadfilesGlobal';
import CardsFiles from 'components/cardsfiles';

export default function Profile() {
  const { selectedFile } = useUploadStore();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <AppBar />
        <View style={{ marginTop: 20, paddingHorizontal: 10, width: 400, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#3b82f6' }}>Recent files</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>last open file</Text>
        </View>
      <ScrollView
        contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10, width: '100%' }}>
        

        <View style={{ marginTop: 10, width: 400, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <CardsFiles
            Title={selectedFile ? selectedFile.name : 'No file selected'}
            Date={selectedFile && selectedFile.lastModified ? new Date(selectedFile.lastModified).toLocaleDateString() : 'Unknown'}
            categories={selectedFile ? selectedFile.mimeType || 'Unknown' : 'Unknown'}
            description={`Size: ${selectedFile ? (selectedFile.size ? selectedFile.size / (1024 * 1024) : 0).toFixed(2) : '0.00'} MB`}
            size={`${selectedFile ? (selectedFile.size ? selectedFile.size / (1024 * 1024) : 0).toFixed(2) : '0.00'} MB`}
            event={() => Alert.alert('File Selected', `You selected: ${selectedFile ? selectedFile.name : 'No file selected'}`)}
            icon="document"
          />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
