import { View, Text } from 'react-native';

const appBar = () => {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: '#3b82f6',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
      }}>
      <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Manage Files Easy</Text>
      <Text style={{ color: 'white', fontSize: 18 }}>Upload your files easily</Text>
    </View>
  );
};

export default appBar;
