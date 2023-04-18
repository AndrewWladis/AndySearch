import { Text, View, ActivityIndicator, Pressable, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Styles';
import LightBar from './LightBar';
import Footer from './Footer';

export default function Results({ route, navigation }) {
  const [isLoad, setLoad] = useState(false);
  const [data, setData] = useState({});
  const [purpleLinks, setPurpleLinks] = useState([]);

  const handleData = (bruh) => {
    setData(bruh.items)
    setLoad(true)
  }

  const isPurpleLink = (index) => {
    if (purpleLinks.includes(index)){
      return 'purple'
    } else {
      return '#0e8ef0'
    }
  }

  useEffect(() => {
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC6DTHe2YxUcTA9mi4SQVL2ryyCudE8M3k&cx=859697a0ebacb4ea6&q=${encodeURIComponent(route.params.query)}`)
      .then(response => response.json())
      .then(data => handleData(data))
      .catch(error => {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    setPurpleLinks([])
  }, [data])


  return (
    <View style={{ flex: 1,}}>
      <ScrollView style={styles.resultscontainer} indicatorStyle="white">
        {isLoad ? data.map((ele, index) => (
          <View style={styles.result}>
            <Pressable onPress={() => {
              navigation.navigate('Web', { url: ele.link })
            }}>
              <Text style={styles.itemtitle}>{ele.title}</Text>
            </Pressable>
            <Text style={styles.itemsnippet}>{ele.snippet}</Text>
            <Pressable onPress={() => {
              setPurpleLinks([ ...purpleLinks, index])
              navigation.navigate('Web', { url: ele.link })
            }}>
              <Text style={[styles.itemlink, {color: isPurpleLink(index)}]}>{ele.link}</Text>
            </Pressable>
          </View>
        )) : <ActivityIndicator size="large" color='black' /> }
      </ScrollView>
      <Footer />
      <LightBar />
    </View>
  );
}