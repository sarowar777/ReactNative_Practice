import { ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';

export default function App() {
  return (
   <SafeAreaView>
   <ScrollView>
    <FlatCards/>
   </ScrollView>
   </SafeAreaView>
  );
}
