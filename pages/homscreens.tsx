import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import AppBar from '../components/appBar';
import CardsFiles from 'components/cardsfiles';

export default function Profile() {
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
          
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
