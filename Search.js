import { Text, View, TextInput, Pressable } from 'react-native';
import {useState} from 'react';
import styles from './Styles';
import LightBar from './LightBar';
import Footer from './Footer';

export default function Search({ navigation }) {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>AndySearch</Text>
      <TextInput
        style={styles.searchbar}
        value={text}
        onChangeText={onChangeText}
        placeholder="Search the web"
        selectionColor="black"
        placeholderTextColor="#5c5c5c"
        onSubmitEditing={() => {navigation.navigate('Results', { query: text })}}
      />
      <Text style={styles.title}>We are a search engine that does not collect any user data</Text>
      {/*<Pressable onPress={() => {
              navigation.navigate('Web', { url: 'https://gly.foundation/' })
      }}>
            <Text style={styles.subtitle}>&#x2022; Donates all proceeds to <Text style={ { textDecorationLine: 'underline'}}>the Good Life Youth Foundation</Text> an organization dedicated to improving the quality of life for “at-risk” youth</Text>
      </Pressable>
      <Text style={styles.subtitle}>&#x2022; Does not collect or sell user data</Text>
      <Pressable onPress={() => {
              navigation.navigate('Web', { url: 'https://andyads.netlify.app/' })
      }}>
        <Text style={styles.adtitle}>Click Here To Get Your Ad On These Searches</Text>
    </Pressable>*/}
      <Footer />
      <LightBar />
    </View>
  );
}