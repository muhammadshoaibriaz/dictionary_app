import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
export default function Results({ navigation, route }) {
  const data = route.params;
  const [synonym, setSynonym] = useState();
  // alert(typeof data);
  // console.log("results data is ", data);
  let phonetic = data[0].phonetic;
  let phonetics = data[0].phonetics;
  // let origin = data[0].origin;
  let meanings = data[0].meanings;
  console.log(meanings);
  let partOfSpeech = data[0].meanings;
  // console.log(partOfSpeech);
  let definitions = partOfSpeech[0].definitions;
  let synonyms = data[0].synonyms;
  // console.log("definitions are", definitions);

  const [value, setValue] = useState(1);
  function Definitions() {
    return (
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.resultCard}>
          <Text style={[styles.smallTitle, { textTransform: "capitalize" }]}>
            Noun
          </Text>
          <Text style={styles.text}>
            1. a plant,
            <Text style={{ color: "#fe3377", fontStyle: "italic" }}>
              {" "}
              Allium Cepa
            </Text>{" "}
            of the amaryllis family, having an edible, succulent, pungent bulb.
          </Text>
          <Text style={styles.text}>2. any of certain similar plants.</Text>
          <Text style={styles.text}>
            3.<Text style={{ color: "#fe3377" }}>Slang. </Text>a person:
            <Text style={{ color: "#999" }}> He is a tough onion.</Text>
          </Text>
        </View>
        <View style={styles.resultCard}>
          <Text style={[styles.smallTitle, { textTransform: "capitalize" }]}>
            {partOfSpeech?.partOfSpeech}
          </Text>
          <Text style={styles.text}>
            1. containing or cooked with onions:
            <Text style={{ color: "#999" }}> Onion Soup</Text>
          </Text>
          <Text style={styles.text}>
            2. of, relating to, or resembling an onion.
          </Text>
          <Text style={styles.text}>
            {/* 3. {output[0].meanings[1].definitions[2].definition} */}
          </Text>
          <Text style={styles.text}>
            {/* 4. {output[0].meanings[1].definitions[3].definition} */}
          </Text>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.resultCard}>
          {/* {meanings.map((item) => {
            if (item.synonyms.length > 0) {
              setSynonym(item.synonyms);
            }
            return (
              <View>
                {synonym.map((item) => (
                  <Text>{item}</Text>
                ))}
              </View>
            );
          })} */}
        </View>
      </View>
    );
  }

  function Synonyms() {
    return (
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={[styles.resultCard, { marginTop: 20 }]}>
          <Text style={styles.smallTitle}>Synonyms</Text>
          {/* <Text style={{ color: "red" }}>{output[0]}</Text> */}
        </View>
      </View>
    );
  }

  function Antonyms() {
    return <Text>Antonyms</Text>;
  }

  const touchableBtn = ["Definitions", "Synonyms", "Antonyms"];

  const customView = () => {
    if (value === 1) {
      return <Definitions />;
    }
    if (value === 2) {
      return <Synonyms />;
    } else {
      return <Antonyms />;
    }
  };

  const [ClearText, setClearText] = useState(data[0].word);

  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.headers}>
        <TouchableOpacity
          style={[
            styles.barBtn,
            {
              width: 30,
              height: 30,
            },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#555" />
        </TouchableOpacity>
        <View style={[styles.inputBar, { width: "90%", height: 40 }]}>
          <View
            style={{
              flex: 1,
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign name="search1" color={"#999"} size={18} />
            <TextInput
              placeholder={ClearText}
              editable
              style={[styles.input]}
            ></TextInput>
          </View>
          <AntDesign
            name="closecircle"
            color={"#999"}
            onPress={() => setClearText("")}
            size={20}
          />
        </View>
      </View>
      <LinearGradient
        start={{ x: 0.1, y: 0.5 }}
        locations={[0.0, 0.9]}
        colors={["#1c014f", "#110032"]}
        style={[
          styles.cardView,
          { marginHorizontal: 20, width: "90%", elevation: 20 },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            elevation: 10,
          }}
        >
          <Text
            style={[
              styles.title,
              { marginTop: 0, marginBottom: 0, color: "#fff" },
            ]}
          >
            {data[0].word}
          </Text>
          <TouchableOpacity
            // onPress={() => {
            //   Speech.speak("how are you");
            // }}
            style={[
              styles.barBtn,
              {
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 7,
                backgroundColor: "#fe3377",
              },
            ]}
          >
            <FontAwesome name="volume-up" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={{ color: "#fe3377", fontWeight: "800" }}>Show IPA</Text>
          <Text
            style={{
              marginLeft: 10,
              color: "#fff",
              fontWeight: "800",
            }}
          >
            [{phonetic}]
          </Text>
        </View>
      </LinearGradient>
      <View
        style={{
          width: "85%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        {touchableBtn.map((item, index) => {
          return (
            <Text
              onPress={() => setValue(index + 1)}
              key={item}
              style={{
                fontWeight: "800",
                fontSize: 16,
                opacity: index + 1 === value ? 1 : 0.4,
              }}
            >
              {item}
            </Text>
          );
        })}
      </View>
      {customView()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barBtn: {
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  resultCard: {
    width: "90%",
    borderRadius: 5,
    elevation: 20,
    shadowColor: "#eee",
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 20,
  },
  smallTitle: {
    fontWeight: "800",
    fontSize: 15,
    opacity: 0.5,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "500",
    color: "#444",
    lineHeight: 25,
  },

  cardView: {
    width: "100%",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 20,
    marginTop: 40,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headers: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  touchableBtn: {
    paddingVertical: 5,
  },

  input: {
    flex: 0.92,
    height: "100%",
    paddingLeft: 8,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontWeight: "900",
    fontSize: 26,
    marginBottom: 20,
    marginTop: 20,
  },
  inputBar: {
    width: "85%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    justifyContent: "space-between",
  },
  history: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});
