import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import mapMarkerImg from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap() {
    const navigation = useNavigation();
    function handleNavigateToOrphanageDetails(){
        navigation.navigate('OrphanagesDetails');
    }
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -27.2092052,
                    longitude: -49.6401092,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                <Marker
                    icon={mapMarkerImg}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8
                    }}
                    coordinate={{
                        latitude: -27.2092052,
                        longitude: -49.6401092,
                    }}
                >
                    <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Lar das meninas</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>2 orfanatos</Text>
                <TouchableOpacity style={styles.createOrphanageButtor} onPress={() => { }}>
                    <Feather name='plus' size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    map: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    calloutText:{
      color:'#0089a5',
      fontSize: 14,
      fontFamily:'Nunito_700bold',
    }
    ,
    calloutContainer:{
      width:160,
      height:46,
      paddingHorizontal:16,
      backgroundColor:'rgba(255,255,255,0.8)',
      borderRadius:16,
      justifyContent: 'center'
    },
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 3,
  
    },
    footerText:{
      fontFamily:'Nunito_700bold',
      color: '#8fa7b3',
  
    },
    createOrphanageButtor:{
      width: 56,
      height: 56,
      backgroundColor:'#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  