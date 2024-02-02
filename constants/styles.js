import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 20,
    },
    welcomeText: {
        fontSize: 18,
        color: COLORS.black,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100, 
        resizeMode: 'contain',
        marginTop: 20,
    },
    welcomeImage: {
        width: 250,
        height: 300,
        resizeMode:'contain',
        alignSelf: 'center',
        marginBottom: 70,
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30, // Adjusted paddingTop
        width: '100%', // Added width property to take full width
    },
    buttonContainerP1: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 30, // Adjusted paddingTop
        width: '100%', // Added width property to take full width
    },
    navButton: {
        paddingTop: 15,
        borderRadius: 8,
        overflow: 'hidden',
        flex: 1, // Added flex property to distribute space evenly
        marginHorizontal: 10, // Added margin for spacing between buttons
    },
});

export default styles;