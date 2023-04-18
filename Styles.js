import { StyleSheet } from 'react-native';

let logoColor = '#0e8ef0';
let blackColor = '#1a1a1a';
let lightTitle = '#34ebe5';
let midBlue = '#21BDEB';

const styles = StyleSheet.create({
    adtitle: {
        marginTop: '15%',
        margin: '1%',
        fontSize: '24%',
        fontWeight: '500',
        textAlign: 'center',
        color: midBlue,
        textDecorationLine: 'underline'
    },
    container: {
      flex: 1,
      backgroundColor: blackColor,
      alignItems: 'center',
      paddingTop: '50%',
      padding: 10
    },
    controls: {
        height: '9%',
        backgroundColor: 'black',
        borderTopWidth: 4,
        borderTopColor: logoColor,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    footer: {
        height: 50,
        backgroundColor: '#627594',
        width: '110%',
        bottom: 0,
        position: 'absolute',
        paddingTop: 5,
        alignSelf: 'center',
    },
    footertitle: {
        color: 'white',
        fontSize: '20%',
        textAlign: 'center'
    },
    itemlink: {
        fontSize: 16,
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    itemsnippet: {
        fontSize: 14,
        color: 'white'
    },
    itemtitle: {
        fontSize: 19,
        fontWeight: '600',
        color: lightTitle
    },
    logo: {
        fontSize: '60%',
        marginTop: '10%',
        color: 'black',
        textAlign: 'center',
        color: logoColor,
        marginBottom: '5%',
        fontWeight: '500'
    },
    result: {
        width: '100%',
        margin: 5,
        paddingRight: 7
    },
    resultscontainer: {
        flex: 1,
        backgroundColor: blackColor,
        marginBottom: 45
    },
    resultsheader: {
        flex: 1,
        backgroundColor: blackColor
    },
    searchbar: {
        height: '9%',
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 25,
        fontSize: '30%',
        padding: 10,
        color: 'black',
    },
    subtitle: {
        margin: '1%',
        fontSize: '22%',
        textAlign: 'center',
        color: 'white'
    },
    title: {
        marginTop: '20%',
        margin: '2%',
        fontSize: '25%',
        fontWeight: '700',
        textAlign: 'center',
        color: 'white',
        fontStyle: 'italic'
    },
    web: {
        flex: 1
    },
});

export default styles  