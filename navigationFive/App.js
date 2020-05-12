import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';




function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1, marginTop: 64 }}>
        <Image source={require("./assets/home.png")}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'normal', fontSize: 32 }}>Home Screen</Text>

        {/* diğer ekrana parametre geçirme */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Music", {
              userName: "Batuhan",
              action: "Hello Guys"
            });
          }}
        >
          <Text style={{ color: '#FFF' }}>Go to the Music Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,
          { borderColor: "#23A6D9", borderWidth: 1, marginTop: 12, backgroundColor: "#FFF" },
          ]}
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Text style={{ color: "#23A6D9" }}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


function MusicScreen({ route, navigation }) {

  {/* önceki ekrandan gelen parametreler */ }
  let { userName, action } = route.params;

  {/* like butonu için state tanımı */ }
  const [liked, setLiked] = React.useState(false);

  {/* header için layout özellikleri (sağ tarafa kalp butonu) */ }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <Icon
            name={liked ? "heart" : "heart-o"}
            size={24}
            color="#FFF"
            style={{ marginRight: 16 }} />
        </TouchableOpacity>
      )
    })
  })

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1, marginTop: 64 }}>
        <Image source={require("./assets/music.png")}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'normal', fontSize: 32 }}>Music Screen</Text>

        {/* Önceki sayfadan gelen parametreler */}
        <Text style={{ fontWeight: "600", marginVertical: 32 }}>
          {userName} says to {action}
        </Text>

        {/* Home sayfasına gitme */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >

          <Text style={{ color: '#FFF' }}>Go to the Home Screen</Text>
        </TouchableOpacity>

        {/* goBack butonu ile bir önceki sayfaya dönme*/}
        <TouchableOpacity
          style={[
            styles.button, {
              borderColor: "#23A6D9",
              borderWidth: 1,
              marginTop: 12,
              backgroundColor: "#FFF"
            },
          ]}
          onPress={() => {
            navigation.goBack("Home");
          }}
        >

          <Text style={{ color: "#23A6D9" }}>Go Back</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

{/* Custom header için fonksiyon */ }
function CustomHeader() {
  return <Icon name="music" size={24} color="#FFF" />
}


function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1, marginTop: 64 }}>
        <Image source={require("./assets/settings.png")}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: "100", fontSize: 32 }}>Settings Screen</Text>
      </View>
    </View>
  )
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1, marginTop: 64 }}>
        <Image source={require("./assets/details.png")}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: "100", fontSize: 32 }}>Details Screen</Text>
      </View>
    </View>
  )
}

/* create navigator */
const Main = createStackNavigator();
const Settings = createBottomTabNavigator();


function SettingsTab() {
  return (


    <Settings.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'SettingsScreen') {
          return <Icon name="cog" color={color} size={size} />
        }

        return <Icon name="paperclip" size={size} color={color} />
      }
    })}
      tabBarOptions={{
        activeTintColor: "#23A6D9",
        inactiveTintColor: "gray"
      }}

    >
      <Settings.Screen name="SettingsScreen" component={SettingsScreen} />
      <Settings.Screen name="DetailsScreen" component={DetailsScreen} />
    </Settings.Navigator>
  )
}



const App = () => {
  return (


    <NavigationContainer >
      {/* Status Bar özellikleri */}
      <StatusBar barStyle="light-content" backgroundColor="#23A6D9" />
      {/* header özellikleri */}
      <Main.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#23A6D9",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "200",
          fontSize: 30,
        },
      }}>
        <Main.Screen name="Home" component={HomeScreen} />
        <Main.Screen name="Music" component={MusicScreen} options={{
          headerTitle: props => <CustomHeader {...props} />
        }} />

        <Main.Screen name="Settings" component={SettingsTab} />
      </Main.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    marginTop: 32,
    backgroundColor: "#23A6D9",
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: 'center'
  }
})

export default App;
