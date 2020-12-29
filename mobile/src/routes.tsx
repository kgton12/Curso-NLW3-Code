import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';
//headerShown: false  = retira o header de todas as paginas.
export default function Routes() {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
				<Screen name="OrphanagesMap" component={OrphanagesMap} />
				<Screen name="OrphanagesDetails"
					component={OrphanageDetails}
					options={{
						headerShown: true,
						header: () => <Header showCancel={false} title="Orfanato" />//Header criado
					}}
				/>
				<Screen name="SelectMapPosition"
					component={SelectMapPosition}
					options={{
						headerShown: true,
						header: () => <Header title="Seleciona no mapa" />//Header criado
					}}
				/>
				<Screen name="OrphanageData"
					component={OrphanageData}
					options={{
						headerShown: true,
						header: () => <Header title="Informe os dados" />//Header criado
					}}
				/>
			</Navigator>
		</NavigationContainer>
	);
}