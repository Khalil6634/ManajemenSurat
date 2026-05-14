import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CardsFilesProps } from 'typing/searchfiletyping';

const CardsFiles = (props: CardsFilesProps) => {
  let colors = '';

  if (props.categories.toLowerCase().includes('pdf')) {
    colors = '#f87171';
  } else if (props.categories.toLowerCase().includes('word')) {
    colors = '#60a5fa';
  } else if (props.categories.toLowerCase().includes('excel')) {
    colors = '#34d399';
  }

  return (
    <View className="radius-2 mb-4 h-30 w-full flex-row items-center bg-slate-200 p-4 rounded-md shadow-xl" onTouchStart={props.event}>
      <Ionicons name={props.icon} size={40} color={colors} className="mr-4" />
      <View className="flex-1">
        <Text className="text-lg font-bold">{props.Title}</Text>
        <Text className="text-sm text-gray-600">{props.description}</Text>
        <Text className="text-xs text-gray-600">
          {props.Date} | {props.categories} | {props.size}
        </Text>
      </View>
      <Ionicons name="ellipsis-vertical" size={15} color={colors} className="ml-4" />    
    </View>
  );
};

export default CardsFiles;
