import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import navigation from '../navigation';
import { useNavigation } from '@react-navigation/native';
import PostUser3 from '../Utils/PostUser';
import { parse } from 'fast-xml-parser';
import DropDownPicker from 'react-native-dropdown-picker';
import { setCurrentUser } from '../Redux/user/user-actions';
import { connect } from 'react-redux';
import { store } from '../Redux/Store';


const SignUpScreen = (currentUser: any) => {


  let [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });


  let [fName, setFname] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("F29-40 Karachi Test Address");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPaassword] = React.useState("");




  const textInputChange = (val: string) => {
    if (val.length !== 0) {
      setData({
        ...data,
        check_textInputChange: true,
      });
      setFname(val)
    } else {
      setData({
        ...data,
        check_textInputChange: false,
      });
      setFname(val)
    }

  };

  const handlelastName = (val: string) => {
    setLName(val)
  };

  const handleEmail = (val: string) => {
    setEmail(val)
  };

  const handlePhone = (val: string) => {
    setPhone(val)
  };


  const handleAddress = (val: string) => {
    setAddress(val)
  };

  const handlePasswordChange = (val: string) => {
    setPassword(val)
  };

  const handleConfirmPasswordChange = (val: string) => {
    setConfirmPaassword(val)
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const [open, setOpen] = useState(false);
  const [valueCity, setValue] = useState(null);
  const [city, setCity] = useState([
    { label: 'Karachi', value: '1' },
    { label: 'Lahore', value: '2' }
  ]);


  const [OpenDis, setOpenDis] = useState(false);
  const [ValueDis, SetValueDis] = useState(null);
  const [district, setdDistrict] = useState([
    { label: 'Korangi', value: '5' },
  ]);

  const [openSubDiv, setopenSubDiv] = useState(false);
  const [subDivValue, setsubDivValue] = useState(null);
  const [subdivision, setSubDivison] = useState([
    { label: 'Model Colony', value: '28' },
  ]);

  // XML POST DATA
  let params = 'fname=' + fName + '&lname=' + lName + '&email=' + email + '&phone=' + phone + '&password=' + password + '&cityid=' + valueCity + '&districtid=' + ValueDis + '&subdivisionid=' + subDivValue + '&address=' + address
  let url = `https://cors-anywhere.herokuapp.com/https://www.pkfoodstreet.com/webapi.asmx/AddNewUser`
  console.log(city)

  // XMLHTTP - IMPLEMENTATION
  var xhr = new XMLHttpRequest();
  let xmlObject;
  let PostData = () => {
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = function () { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Request finished. Do processing here.
        xmlObject = parse(xhr.responseText)
        console.log(xmlObject.int)
        let response = xmlObject.int;
        if (response === 1) {
        setCurrentUser({fName,lName,email,phone,valueCity,ValueDis,subDivValue})
        console.log(currentUser)

        } else {
          console.log("error adding user")
        }
        // setresponse(xmlObject.int)
      } else {
        console.log("error posting data")
      }
    }
    xhr.send(params);

  }

  // setCurrentUser(params)

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#31AA47" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign up!</Text>
      </View>
      <View>
        <Text style={styles.text_header2}>
          {/* Create Account{' '} */}
        </Text>
      </View>
      <Animatable.View animation="fadeInDownBig" style={styles.footer}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {/* // FIRST NAME */}

          <Text style={styles.text_footer}>First Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#12803D" size={20} />
            <TextInput
              placeholder="Your First Name"
              placeholderTextColor="#36362e"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {/* // LAST NAME */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Last Name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#12803D" size={20} />
            <TextInput
              placeholder="Your Last Name"
              placeholderTextColor="#36362e"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlelastName(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {/* //EMAIL */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color="#12803D" size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#36362e"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleEmail(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {/* // PHONE */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Phone
          </Text>
          <View style={styles.action}>
            <FontAwesome name="mobile" color="#12803D" size={27} />
            <TextInput
              placeholder="PhoneNumber"
              placeholderTextColor="#36362e"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePhone(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {/* // CITY */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            City
          </Text>
          <View style={styles.action}>
            <FontAwesome name="map-marker" color="#12803D" size={24} />

            <DropDownPicker
              style={styles.pickerInput}
              textStyle={{
                fontSize: 15
              }}
              open={open}
              value={valueCity}
              items={city}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setCity}
              onChangeValue={(value) => {
                console.log(value);
              }}
            />

            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}

          </View>
          {/* // DISTRICT */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            District
          </Text>
          <View style={styles.action}>
            <FontAwesome name="map-marker" color="#12803D" size={24} />

            <DropDownPicker
              style={styles.pickerInput}
              textStyle={{
                fontSize: 15
              }}
              open={OpenDis}
              value={ValueDis}
              items={district}
              setOpen={setOpenDis}
              setValue={SetValueDis}
              setItems={setdDistrict}

            />

            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          {/* // SUBDIVISION */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            SubDivison
          </Text>
          <View style={styles.action}>
            <FontAwesome name="map-marker" color="#12803D" size={24} />

            <DropDownPicker
              style={styles.pickerInput}
              textStyle={{
                fontSize: 15
              }}
              open={openSubDiv}
              value={subDivValue}
              items={subdivision}
              setOpen={setopenSubDiv}
              setValue={setsubDivValue}
              setItems={setSubDivison}
            />

            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>


          {/* // PASSWORD */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#12803D" size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#36362e"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#12803D" size={20} />
              ) : (
                <Feather name="eye" color="#12803D" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {/* // CONFIRM PASSWORD */}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#12803D" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              placeholderTextColor="#36362e"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#12803D" size={20} />
              ) : (
                <Feather name="eye" color="#12803D" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={PostData}
              style={[
                styles.signIn,
                {
                  backgroundColor: '#31AA47',
                  borderColor: '#36913d',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {

                    color: 'white',
                    fontWeight: "500",
                    fontFamily: "Montserrat-Medium",
                  },
                ]}>
                Sign up
              </Text>
            </TouchableOpacity>

            {/* // LOG IN */}
            <TouchableOpacity
              onPress={() => { alert('Log In') }}
              style={[
                styles.signIn,
                {
                  borderColor: '#36913d',
                  borderWidth: 1,
                  marginTop: 15,


                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#36913d',
                    fontWeight: "500",
                    fontFamily: "Montserrat",
                  },
                ]}>
                I have an account
              </Text>
            </TouchableOpacity>


          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};



const mapStateToProps = (state: { user: { currentUser: any; }; }) => ({
  currentUser : state.user.currentUser
  });

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
  
});

export default connect(mapStateToProps, mapDispatchToProps) (SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31aa47',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: "Montserrat-Bold",
    // textAlign: 'center',
  },
  text_header2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    // marginLeft: 40,

    marginBottom: 4,
  },
  text_footer: {
    color: '#12803D',
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "Montserrat-Medium",
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#12803D',
    fontFamily: "Montserrat",
  },
  pickerInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    color: '#12803D',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: '#202020',
    fontWeight: "500",
    fontFamily: "Montserrat",
  },
});