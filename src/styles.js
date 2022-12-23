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
      color: 'black',
      
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
      backgroundColor: 'white',
      borderRadius: 5,
      fontSize: 18,
      color: 'black',
      maxWidth: '80%',
      paddingLeft: '1%',
      paddingRight: '1%',
      // flex: 1,
      // alignSelf: 'flex-end'
      //backgroundColor: 'pink',
    },
    
  mymsg: {
    flex: 1,
    backgroundColor: '',
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 3,
    marginRight: 6,
    padding: 0,
    borderRadius: 5,
    minHeight: 30,
    maxWidth: windowWidth*80/100,
    alignSelf: 'flex-end',
  },
  msg: {
    flex: 1,
    backgroundColor: '',
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 3,
    marginRight: 6,
    padding: 0,
    borderRadius: 5,
    minHeight: 30,
    maxWidth: windowWidth*80/100,
    alignSelf: 'flex-start',
  
  },
  mymsgcontainer: {
    flex: 1,
    backgroundColor: '',
    padding: 0,
    borderRadius: 5,
    maxWidth: windowWidth*80/100,
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  msgcontainer: {
    flex: 1,
    backgroundColor: '',
    padding: 0,
    borderRadius: 5,
    maxWidth: windowWidth*80/100,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  
  },
  userimage: {
    height: 30,
    width: 30,
    borderRadius: 5,
    // marginTop: 5,
    // marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
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
  
  image1: {
    height: 60,
    width: 60,
    borderRadius: 5,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 5,
    padding: 2,
    borderWidth: 2,
    borderColor: '#ffd400',
  },
  biocontainer:{
    minHeight: 50,
    margin:5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6491aa',
  },
  biotag:{
    color:'#6491aa',  
    borderWidth: 2, 
    borderColor: '#6491aa',
    margin:5,
    paddingLeft:3,
    paddingRight:3,
    borderRadius: 5,
    
  }
  
  });

  module.exports = styles