import React, {useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Linking, StyleProp, TextStyle, ViewStyle, } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, SearchBar, ListItem, Avatar  } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Header = (props) => {

  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043247-1-avatar-female-portrait-woman_113261.png',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://cdn.icon-icons.com/icons2/2335/PNG/512/female_nurse_avatar_people_icon_142374.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Amy Farha',
      avatar_url: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043247-1-avatar-female-portrait-woman_113261.png',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://cdn.icon-icons.com/icons2/2335/PNG/512/female_nurse_avatar_people_icon_142374.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Amy Farha',
      avatar_url: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043247-1-avatar-female-portrait-woman_113261.png',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://cdn.icon-icons.com/icons2/2335/PNG/512/female_nurse_avatar_people_icon_142374.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://cdn.icon-icons.com/icons2/2335/PNG/512/female_nurse_avatar_people_icon_142374.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Amy Farha',
      avatar_url: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043247-1-avatar-female-portrait-woman_113261.png',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://cdn.icon-icons.com/icons2/2335/PNG/512/female_nurse_avatar_people_icon_142374.png',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Amy Farha',
      avatar_url: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043247-1-avatar-female-portrait-woman_113261.png',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://cdn.icon-icons.com/icons2/2335/PNG/512/female_nurse_avatar_people_icon_142374.png',
      subtitle: 'Vice Chairman'
    },
  ]

  return (
    <SafeAreaProvider>
      <HeaderRNE
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        rightComponent={
            <View style={styles.headerRight}>
              {/*
                <Icon name="description" color="white" />
                <Icon type="antdesign" name="rocket1" color="white" />
              */}
            </View>
        }
        centerComponent={{ text: 'Apprenants de la Manu', style: styles.heading }}
      />
      <SearchBar
        placeholder="ex. John DOE"
        onChangeText={updateSearch}
        value={search}
        lightTheme='true'
        style={{flexDirection:"row-reverse"}}
      />
      <ScrollView>
        {
          list.map((l, i) => (
            <ListItem 
                key={i} 
                bottomDivider
                onPress={null}>
              <Avatar source={{uri: l.avatar_url}} size={64} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron size={64} />
            </ListItem>
          ))
        }
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
headerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#397af8',
  marginBottom: 20,
  width: '100%',
  paddingVertical: 15,
},
heading: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default Header;