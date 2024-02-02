import React from 'react';
import { View } from 'react-native';
import COLORS from '../constants/colors.js';
import styles from '../constants/styles.js';

const CircleIndicator = ({ active }) => (
    <View
        style={[
            styles.circle,
            {backgroundColor: active ? COLORS.primary : COLORS.secondary},
        ]}
    />
)

export default CircleIndicator;