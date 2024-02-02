import React from 'react';
import { View, Text, Image, Button} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import styles from '../constants/styles.js';
import COLORS from '../constants/colors.js';
import CircleIndicator from '../constants/CircleIndicator.js';

const WelcomeScreen4 = ({navigation}) => {
    return(
        <LinearGradient
            style={styles.container}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={styles.contentContainer}>
                <Image
                    source={require('../assets/welcome4icon.png')}
                    style={styles.welcomeImage}
                />

                <View style={styles.navigationBar}>
                    <CircleIndicator active={false} />
                    <CircleIndicator active={false} />
                    <CircleIndicator active={false} />
                    <CircleIndicator active={true} />
                </View>

                <Text style={styles.welcomeText}>Build The Life YOU Want To Live</Text>

            </View>

            <View style={styles.buttonContainer}>
                <Button 
                        style = {styles.navButton}
                        title="< Previous" 
                        color={COLORS.green}
                        onPress={() => navigation.navigate('Welcome3')}
                        touchSoundDisabled={true} 
                />
                <Button 
                        style = {styles.navButton}
                        title="Finish >" 
                        color={COLORS.green}
                        onPress={() => navigation.navigate('Signup')}
                        touchSoundDisabled={true} 
                />
            </View>

        </LinearGradient>
    );
};

export default WelcomeScreen4;
