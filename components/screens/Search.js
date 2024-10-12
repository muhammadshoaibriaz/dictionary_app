import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import axios from "axios";
import { Dialog } from "react-native-elements";
import { TouchableRipple } from "react-native-paper";
import { fetchDictionaryData } from "../../api/apiUrl";
const apiKey = "918e2440-9f57-43b4-9b8b-ea41f5c9d80f";
export default function Search({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");

  const [data, setData] = useState({});

  useMemo(() => {
    setVisible(true);
  }, [input]);
  // const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const getValues = (text) => {
    // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
    //   .then((res) => res.json())
    //   .then((results) => setArray(results));
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
      .then((res) => res.json())
      .then((newData) => {
        setData(newData);
        // let word = data[0].word;
        // let phonetic = data[0].phonetic;
        // let phonetics = data[0].phonetics;
        // let origin = data[0].origin;
        // let meanings = data[0].meanings;
        // let partOfSpeech = data[0].meanings;

        // for (let i = 0; i < meanings.length; i++) {
        //   console.log(meanings[i]);
        // }
        // meanings[0].definitions.map((item) => console.log(item));
      });
  };
  // console.log(typeof data);

  const onHandlerChange = useCallback(debounce(getValues, 600), []);
  const [datas] = useState([]);
  const wordOfTheDay = [
    "Josher",
    "Weird",
    "Aching",
    "Abater",
    "Abductor",
    "Abeam",
    "Baalism",
    "Bacchae",
    "Cabalist",
    "Jabbered",
    "Jades",
    "Jadish",
  ];
  const randomQuote = Math.floor(Math.random() * wordOfTheDay.length);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.header}>
        <TouchableRipple
          style={styles.barBtn}
          onPress={() => setVisible(true)}
          underlayColor="#ddd"
        >
          <FontAwesome name="book" size={24} />
        </TouchableRipple>
      </View>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../images/dictionary.png")}
          style={styles.image}
        />
        <Text style={[styles.title]}>Thesaurus</Text>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.6,
            textAlign: "center",
            width: "60%",
            marginBottom: 15,
          }}
        >
          Find synonyms, antonyms, and related words
        </Text>
        <View style={styles.inputBar}>
          <View
            style={{
              flex: 1,
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign
              onPress={() => {
                navigation.navigate("Results", data);
              }}
              name="search1"
              size={20}
            />
            <TextInput
              placeholder="Search by word"
              style={styles.input}
              onChangeText={onHandlerChange}
            ></TextInput>
          </View>
          <Feather name="mic" color={"#999"} size={20} />
        </View>
        <TouchableOpacity
          style={styles.history}
          onPress={() => navigation.navigate("History")}
        >
          <Text>Show history</Text>
          <FontAwesome
            name="angle-down"
            style={{ marginLeft: 5, marginTop: 3 }}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <Dialog
        isVisible={visible}
        overlayStyle={{
          width: "100%",
          backgroundColor: "#fff",
          elevation: 0,
          marginTop: 100,
          height: 500,
          position: "absolute",
          bottom: 0,
        }}
        statusBarTranslucent={true}
        animationType="slide"
        onDismiss={() => setVisible(false)}
        onRequestClose={() => setVisible(false)}
        transparent={true}
        onBackdropPress={() => setVisible(false)}
        backdropStyle={{ backgroundColor: "#fff", opacity: 0.7 }}
      >
        <View
          style={{
            alignItems: "center",
            height: 500,
            position: "relative",
          }}
        >
          <Text style={styles.title}>Word of the day</Text>
          <Text
            style={{
              fontSize: 16,
              opacity: 0.6,
              textAlign: "center",
              width: "100%",
              marginBottom: 15,
            }}
          >
            Build your vocabulary with new words and definitions everyday of the
            week.
          </Text>
          <LinearGradient
            start={{ x: 0.1, y: 0.5 }}
            locations={[0.0, 0.9]}
            colors={["#1c014f", "#110032"]}
            style={[styles.cardView]}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={[
                    styles.title,
                    { marginTop: 0, marginBottom: 0, color: "#fff" },
                  ]}
                >
                  {wordOfTheDay[randomQuote]}
                </Text>
                <TouchableOpacity
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
                <Text style={{ color: "#fe3377", fontWeight: "800" }}>
                  Show IPA
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    color: "#fff",
                    fontWeight: "800",
                  }}
                >
                  [am.bi.sin.un.ster]
                </Text>
              </View>
              <Text style={{ color: "#999", fontWeight: "700", marginTop: 10 }}>
                clumsy or unskillful with both hands.
              </Text>
              <TouchableOpacity
                style={[styles.history, { alignSelf: "center" }]}
              >
                <Text style={{ color: "#fe3377" }}>Show More</Text>
                <FontAwesome
                  name="angle-down"
                  color={"#fe3377"}
                  style={{ marginLeft: 5, marginTop: 3 }}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <LinearGradient
            start={{ x: 0.1, y: 0.5 }}
            colors={["#fe3388", "#fe3366"]}
            style={[
              styles.barBtn,
              {
                width: 50,
                height: 50,
                elevation: 10,
                shadowColor: "#fe3377",
                position: "absolute",
                bottom: 50,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={[styles.barBtn, { width: 50, height: 50 }]}
            >
              <AntDesign name="close" size={20} color="#fff" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  barBtn: {
    width: 40,
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  resultCard: {
    width: "90%",
    borderRadius: 5,
    // elevation: 40,
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
