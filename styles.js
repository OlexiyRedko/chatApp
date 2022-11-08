import { StyleSheet, Dimensions,} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    slidercontainer: {
      flexDirection: 'column-reverse',
      height: '100%',
  
  },
    input:{
      flex:1,
      minHeight:40,
      maxHeight:80,
      maxWidth:'70%',
      backgroundColor:'white',
      padding:2,
      margin:5,
      borderRadius: 5,
    },
    flatlist:{
      height:'100%',
    },
    container: {
        minHeight: '100%',
        width: '100%'
    },
    container1: {
      width: '100%',
      
      // height: '100%',
    },
    container2: {
      flexDirection: 'row',
      flex: 1
    },
    header: {
      backgroundColor: '#2d425f',
      alignItems: 'stretch',
      flexDirection: 'row',
      alignItems: 'flex-end',
      height: windowHeight*5/100
    },
    bottom: {
      backgroundColor: '#2d425f',
      alignItems: 'stretch',
      flexDirection: 'row-reverse',
      alignItems: 'flex-end',
    },
    sider: {
      backgroundColor: '#213144',
      alignSelf: 'stretch',
      height: '100%',
      
    },
    item: {
      backgroundColor: 'white',
      marginTop: 1,
      marginBottom: 1,
      marginLeft: 3,
      marginRight: 6,
      padding: 0,
      borderRadius: 5,
      minHeight: 64,
      flexDirection: 'row-reverse',
  
  
  },
    label: {
      fontSize: 18,
      color: 'black',
      maxWidth: "85%",
      marginTop: 5,
      marginLeft: 5,
      flex: 1,
      //backgroundColor: 'pink',
    },
    messagetext: {
      fontSize: 18,
      color: 'black',
      maxWidth: windowWidth*80/100 - 35,
      marginTop: 5,
      marginLeft: 5,
      // flex: 1,
      // alignSelf: 'flex-end'
      //backgroundColor: 'pink',
    },
    
  mymsg: {
    flex: 1,
    backgroundColor: 'green',
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 3,
    marginRight: 6,
    padding: 0,
    borderRadius: 5,
    minHeight: 40,
    maxWidth: windowWidth*80/100,
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
    
  
  },
  msg: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 3,
    marginRight: 6,
    padding: 0,
    borderRadius: 5,
    minHeight: 40,
    maxWidth: windowWidth*80/100,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  
  },
  userimage: {
    height: 20,
    width: 20,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
  },
    labelheader: {
      fontSize: 20,
      color: 'white',
      marginBottom: 4,
      
  },
    button: {
      height: 18,
      width: 30,
      marginTop: 5,
      marginBottom: 8,
      marginLeft: '4%',
      marginRight: '45%',
  
  },
  button2: {
    height: 18,
    width: 18,
    marginTop: 5,
    marginBottom: 8,
    marginLeft: '0%',
    marginRight: '4%',
  
  },
  buttonsend: {
    height: 30,
    width: 30,
    marginTop: 5,
    marginBottom: 8,
    marginLeft: '4%',
    marginRight: '6%',
  
  },
  image: {
    width:'100%',
    height: '100%',
  },
  image1: {
    height: 60,
    width: 60,
    borderRadius: 5,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 5,
    padding: 2,
    borderWidth: 1,
    borderColor: '#ffd400',
  },
  
  });

  module.exports = styles