import React, {useState} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { FlatList, Text, View } from 'react-native';
import { ResetLapsButton, StartStopButton } from './buttons';
import { styles } from './styles';


function msToTime(timeInMS) {
    //return typeof(timeInMS);
    return new Date(parseInt(timeInMS, 10)).toISOString().slice(11, -2)
}

function TimeDisplay({timeElapsed}) {
    console.log(timeElapsed);
    return (
      <Text style={styles.time_display}>
        {msToTime(timeElapsed)}
      </Text>
    )
}

let timerId = undefined;

export function Container() {
    const [timeElapsed, setTimeElapsed] = useState(msToTime(0));
    const [getLaps, setLaps] = useState([]);
    const [started, setStarted] = useState(false);
    
    function startTimer() {
        if(!started) {
            const timeAtStart = new Date().getTime();
            timerId = setInterval(()=>{
                const timeNow = new Date().getTime();
                setTimeElapsed(parseInt(timeElapsed, 10)+(timeNow-timeAtStart));
            });
            setStarted(true);
        }
    }
    
    function pauseTimer() {
        clearInterval(timerId);
        setStarted(false);
    }
    
    function reset() {
        clearInterval(timerId);
        setTimeElapsed(0);
        setLaps([]);
        setStarted(false);
    }
    
    function addLap() {
        let laps = getLaps;
        laps.push(msToTime(timeElapsed));
        setLaps(laps);
    }

    return (
        <View>
            <TimeDisplay timeElapsed={timeElapsed} />
            <View style={styles.buttonsContainer}>
                <StartStopButton started={started} startTimer={startTimer} pauseTimer={pauseTimer}/>
                <ResetLapsButton started={started} addLap={addLap} reset={reset} />
            </View>
            <LapsDisplay getLaps={getLaps} />
        </View>
    );
}

function LapsDisplay({getLaps}) {
    const lapsData = getLaps.map((lap)=>{return {key: lap}});
    console.warn(lapsData)
    const lapsExist = lapsData.length !== 0

    return (
        <View>
            <View style={lapsExist?styles.lapsDivider:''}/>
            <FlatList 
                data={lapsData}
                renderItem={({item})=><Text style={styles.lap}>{item.key}</Text>}
            />
        </View>
    )
}

