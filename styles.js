import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'flex-top',
    },
    title: {
        color: '#696969',
        fontSize: 54,
        marginTop: 10,
        alignSelf: 'center',
    },
    time_display: {
        color: '#8b8589',
        fontSize: 31,
        margin: 20,
        alignSelf: 'center',
      },
    buttons: {
        borderColor: '#696969',
        borderWidth: 5,
        borderRadius: 6,
        margin: 3,
        marginTop: 0,
        marginBottom: 6,
        width: 100,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    lap: {
        margin: 3,
        fontSize: 19,
        color: '#8b8589',
        alignSelf: 'center',
    },
    lapsDivider: {
        marginVertical: 8,
        borderBottomColor: '#696969',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})
