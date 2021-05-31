import React from 'react';
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
import ButtonLinear from '../components/SignUpButton';

const SignInScreen = () => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });



  const textInputChange = (val: string) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val: string) => {
    setData({
      ...data,
      confirm_password: val,
    });
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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#31AA47" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <View>
        <Text style={styles.text_header2}>
          {/* Welcome to PK Food Street{' '} */}
        </Text>
      </View>
      <Animatable.View animation="fadeInDownBig" style={styles.footer}>
        <ScrollView showsHorizontalScrollIndicator={false}>


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
              onChangeText={val => handlePasswordChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>

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
              onChangeText={val => handlePasswordChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>

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
              onChangeText={val => handlePasswordChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>

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
            <TextInput
              placeholder="Your District"
              placeholderTextColor="#36362e"

              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#12803D" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          
  

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
              // onPress={() => navigation.goBack()}
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
                  },
                ]}>
                Sign up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.goBack()}
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

export default SignInScreen;

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
    fontSize: 18,
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
    color: 'black',
  },
});