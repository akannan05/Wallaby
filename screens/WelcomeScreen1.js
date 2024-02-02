import React from 'react';
import { View, Text, Image, Button} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import styles from '../constants/styles.js';
import COLORS from '../constants/colors.js';
import CircleIndicator from '../constants/CircleIndicator.js';

const WelcomeScreen1 = ({navigation}) => {
    return(
        <LinearGradient
            style={styles.container}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={styles.contentContainer}>
                <Image
                    source={require('../assets/welcome1icon.png')}
                    style={styles.welcomeImage}
                />

                <View style={styles.navigationBar}>
                    <CircleIndicator active={true} />
                    <CircleIndicator active={false} />
                    <CircleIndicator active={false} />
                    <CircleIndicator active={false} />
                </View>

                <Text style={styles.welcomeText}>Take Control Of Your</Text>
                <Text style={styles.welcomeText}>Happiness With Wallaby </Text>

            </View>

            <View style={styles.buttonContainerP1}>
                <Button 
                        style = {styles.navButton}
                        title="Next >" 
                        color={COLORS.green}
                        onPress={() => navigation.navigate('Welcome2')}
                        touchSoundDisabled={true} 
                />
            </View>

        </LinearGradient>
    );
};

export default WelcomeScreen1;
