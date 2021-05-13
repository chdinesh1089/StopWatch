import React, {useState} from 'react';
import { Button, View } from 'react-native';
import { styles } from './styles';

export function StartStopButton({started, startTimer, pauseTimer}) {
    return (
        <View style={styles.buttons}>
            <Button color="#808080"
                onPress={started?pauseTimer:startTimer}
                title={started?"Pause":"Start"}
            />
        </View>
    )
}

export function ResetLapsButton({started, addLap, reset}) {
    return (
        <View style={styles.buttons}>
            <Button color="#808080"
                onPress={started?addLap:reset}
                title={started?"Lap":"Reset"}
            />
        </View>

    )
}
