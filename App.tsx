import { Text, View, StyleSheet, FlatList } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {FontAwesome5} from "@expo/vector-icons"

const forecastData: ForecastItem[] = [
  { day: "Wed", icon: "cloud-rain", high: 20, low: 15 },
  { day: "Thu", icon: "cloud", high: 21, low: 16 },
  { day: "Fri", icon: "cloud-sun", high: 23, low: 17 },
  { day: "Sat", icon: "cloud-showers-heavy", high: 19, low: 14 },
  { day: "Sun", icon: "cloud-rain", high: 18, low: 13 },
];

const datetime = "Wed, 30  August 11:45 AM"

export default function App() {
  return (
    <LinearGradient
    colors={["rgba(9,14,23,0.85)", "rgba(27,38,53,0.88)", "rgba(40,53,71,0.92)"]}
    start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={styles.gradient}
>

{/* City and Date/Time */}
    <View style={styles.container}>
      <Text style={styles.city}>Paris   </Text>
            <Text style={styles.datetime}>{datetime}</Text>
    </View>

{/* Current Weather */}
<View style = {styles.current}>
<Text style={styles.temp}>18°</Text>
<FontAwesome5 name = "cloud-rain" size={76} style={styles.currentIcon} />
<Text style={styles.subtitle}>Overcast with light drizzle</Text>
</View>



{/* 5-day Forecast */}
<FlatList
showsVerticalScrollIndicator={false}
data={forecastData}
renderItem={({ item }) => (
<View style = {styles.forecastItem}>
<Text style={styles.day}>{item.day}</Text>
              <FontAwesome5 name={item.icon} size={28} color="#88C0D0" style={styles.weatherIcon} />
              <Text style={styles.temperature}>{item.high}°/{item.low}°</Text>
</View>



)}

keyExtractor={(item) => item.day}            

    />
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  city: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  datetime:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradient:{
  flex: 1,
  paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 28,
    justifyContent: "space-between",
  },
  current:{
    alignItems: "center",
    marginTop: 12,
  },
  temp:{
    color: "white",
    fontSize: 72,
    fontWeight: "900",
  },
  currentIcon:{
    marginTop: 8,
    color: "blue"
  },
  subtitle:{
    fontSize: 16,
    marginTop: 10,
  },
  temperature:{
    fontSize: 16,
    color: "white"
  },
  day:{
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  forecastItem:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  weatherIcon: {
    
  }
});
