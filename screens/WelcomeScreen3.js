import React from 'react';
import { View, Text, Image, Button} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import styles from '../constants/styles.js';
import COLORS from '../constants/colors.js';
import CircleIndicator from '../constants/CircleIndicator.js';

const WelcomeScreen3 = ({navigation}) => {
    return(
        <LinearGradient
            style={styles.container}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={styles.contentContainer}>
                <Image
                    source={require('../assets/welcome3icon.png')}
                    style={styles.welcomeImage}
                />

                <View style={styles.navigationBar}>
                    <CircleIndicator active={false} />
                    <CircleIndicator active={false} />
                    <CircleIndicator active={true} />
                    <CircleIndicator active={false} />
                </View>

                <Text style={styles.welcomeText}>Eliminate Financial Stress And</Text>
                <Text style={styles.welcomeText}>Never Overspend On Unhappy</Text>
                <Text style={styles.welcomeText}>Purchases Again</Text>

            </View>

            <View style={styles.buttonContainer}>
                <Button 
                        style = {styles.navButton}
                        title="< Previous" 
                        color={COLORS.green}
                        onPress={() => navigation.navigate('Welcome2')}
                        touchSoundDisabled={true} 
                />
                <Button 
                        style = {styles.navButton}
                        title="Next >" 
                        color={COLORS.green}
                        onPress={() => navigation.navigate('Welcome4')}
                        touchSoundDisabled={true} 
                />
            </View>

        </LinearGradient>
    );
};

export default WelcomeScreen3;
