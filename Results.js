import { Text, View, ActivityIndicator, Pressable, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Styles';
import LightBar from './LightBar';
import Footer from './Footer';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-ElxhBoDrwZrCYkMxuZnAFit0",
    apiKey: "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",
});

async function AIRes(text) {
    const openai = new OpenAIApi(configuration);
    
    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: text }],
    });

    return result.data.choices[0].message.content;
}

export default function Results({ route, navigation }) {
  const [isLoad, setLoad] = useState(false);
  const [data, setData] = useState({});
  const [aiResult, setAiResult] = useState("Loading...");
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

    AIRes(route.params.query)
      .then(text => setAiResult(text))
  }, [])

  useEffect(() => {
    setPurpleLinks([])
  }, [data])


  return (
    <View style={styles.results}>
      <ScrollView style={styles.aiResult}>
          <Text style={styles.aiText}>{aiResult}</Text>
      </ScrollView>
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