import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import useTyping from 'hooks/hooks.search';
import { TouchableOpacity } from 'react-native';


export default function Profile() {
  const { handlerinput, typing } = useTyping()
  return (
    <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          width: '100%',
          borderColor: 'gray',
          borderRadius: 5,
          color: 'black',
          backgroundColor: 'white',
          padding: 10,
        }}
        placeholder="cari file"
        onChangeText={handlerinput}
        value={typing}
      />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: 9,
          width: '100%',
          gap: 10,
        }}>
        <PickContent formatfile="PDF" />
        <PickContent formatfile="Word" />
        <PickContent formatfile="Excel" />
        <PickContent formatfile="image" />
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: 10,
          width: '100%',
        }}>
          <Text style={{ color: 'gray' }}>{!typing ? 'silahkan cari files' : typing}</Text>
        </ScrollView>
    </SafeAreaView>
  );
}

const PickContent = ({ formatfile }: { formatfile: string }) => {
  let colors = '';

  if (formatfile === 'PDF') {
    colors = '#f87171';
  } else if (formatfile === 'Word') {
    colors = '#60a5fa';
  } else if (formatfile === 'Excel') {
    colors = '#34d399';
  } else {
    colors = '#6b7280';
  }

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors,
        padding: 10,
        width: 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => console.log(`Selected format: ${formatfile}`)}

    >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{formatfile}</Text>
    </TouchableOpacity>
  );
};
