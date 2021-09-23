import {StyleSheet,Platform,NativeModules} from 'react-native';
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default StyleSheet.create({
    container:{
      flex:1,
      borderTopWidth:STATUSBAR_HEIGHT,
    },
    viewHeaderContent:{
        flex:2.5,
        paddingLeft:15,
        paddingRight:15,
    },
    viewHeader:{
        flex:1,
        justifyContent:'flex-end'
    },
    textHeader:{
        fontSize:38,
        fontWeight:'bold',
        color:'black'
    },
    textDateToday:{
        fontSize:16,
        color:'grey'
    },
    viewInputButton:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    textInput:{
        paddingLeft:5,
        borderWidth:1,
        borderRadius:5,
        flex:4,
        height:40,
    },
    viewButton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'lightgrey',
        height:40,
        marginLeft:5
    },
    textAdd:{
        fontSize:16
    },
    viewContent:{
      flex:8,
      paddingLeft:15,
      paddingRight:15,
    },
    textEmpty:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        color:'#9C9C9C'
    }
})