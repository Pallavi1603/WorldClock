import React,{useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import moment from 'moment';

const date = new Date(Date.UTC(2016, 11, 12, 3, 0, 0)).toISOString();
const date1 = new Date().toISOString();
const date2 = new Date(Date.UTC(2019, 18, 11, 7, 9, 5)).toISOString();
const date3 = new Date(Date.UTC(2013, 14, 10, 2, 6, 9)).toISOString();
const date4= new Date(Date.UTC(2012, 11, 18, 8, 2, 5)).toISOString();



const App = () => {
  
  const countryData = [
    {
      uri:"https://seeklogo.com/images/U/usa-flag-logo-F080109EF3-seeklogo.com.png",
      name: 'USA',
      date: date,
    },
    {
      uri:"https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png",
      name: 'India',
      date: date1,
    },
    {
      uri:"https://seeklogo.com/images/J/Japan-logo-95CBBFE790-seeklogo.com.png",
      name: 'Japan',
      date: date2,
    },
    {
      uri:"https://thumbs.dreamstime.com/b/uae-national-fabric-flag-textile-background-united-arab-emirates-state-official-sign-symbol-international-asian-arabian-world-158360165.jpg",
      name: 'Dubai',
      date: date3,
    },
    // {
    //   uri:"https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg",
    //   name: 'China',
    //   date: date4,
    // },

  ];

  const [country, setCountry] = useState(countryData.slice(0,3));

const addData = () => {
  console.log("Button");
  let index = country.length;
  if(index < countryData.length){
    setCountry(prev => prev.concat(countryData[index]))
  }else{
    Alert.alert("U don't have")
  }
  
}

  const renderItem = ({item}) => {
    return (
      <ScrollView style={styles.view}>
        <Image
        source={{uri:item.uri}}
        style={{width:50,height:50,marginLeft:8}}
        />
        <Text style={{color:"black",fontSize:25,marginTop:10,marginLeft:10}}>{item.name}</Text>
        <Text style={{color:"black",fontSize:15,paddingTop:20,marginTop:10}}>{moment(item.date).format('DD MMM YYYY')}</Text>
        <Text style={{color:"black",marginLeft:330,fontSize:20,marginBottom:10}}>{moment(item.date).format('HH:mm:ss')}</Text>

      </ScrollView>
    );
  };

  return (
    <View style={{backgroundColor:"black"}}>
    <FlatList
      data={country}
      keyExtractor={item => item.name}
      renderItem={renderItem}
    />
    <Button title='More' onPress={addData} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 10,
    marginBottom: 30,
    backgroundColor: 'white',
  },
 
});

export default App;
