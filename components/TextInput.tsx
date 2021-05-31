import React, {memo, useCallback, useRef, useState} from 'react';
import FONTS from'../assets/ultis/fonts';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import colors from '../assets/ultis/colors';
import formatPhoneNumber from '../assets/ultis/formatPhoneNumber';
import formatCardNum from '../assets/ultis/formatCardNum';
interface inputProps {
  style?: ViewStyle;
  secure?: boolean;
  title?: string;
  styleView?: ViewStyle;
  titleStyle?: ViewStyle;
  btnTitle?: string;
  onPress?: () => void;
  marginTop?: number;
  onFocus?: () => void;
  phonePad?: boolean;
  autoFocus?: boolean;
  value?: string;
  editable?: boolean;
  isPhoneNum?: boolean;
  isCardNum?: boolean;
  onTextChange?: (text: string) => void;
}

const FormTextInput = memo((props: inputProps) => {
  const inputRef = useRef();
  const [showPw, setShowPw] = useState(true);
  const [changeText, setChangeText] = useState(props.value);
  const onShowPW = useCallback(() => {
    setShowPw(!showPw);
  }, [showPw]);

  const onFocus = useCallback(() => {
    props.onFocus && props.onFocus();
  }, [props]);

  const isSecure = props.secure ? showPw : false;
  const btnTitle = props.btnTitle || 'Show';
  const marginTop = {marginTop: props.marginTop || 24};
  return (
    <View
      style={[
        props.styleView,
        styles.container,
        props.editable === false ? styles.inputInActive : styles.inputActive,
      ]}>
      {props.secure || props.btnTitle ? (
        <View style={[styles.passwordView, marginTop]}>
          <Text style={[styles.textField, props.titleStyle]}>
            {props.title}
          </Text>
          <TouchableOpacity onPress={onShowPW}>
            <Text style={styles.textShowPassword}>{btnTitle}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={[styles.textField, props.titleStyle]}>{props.title}</Text>
      )}
      <TextInput
        style={[styles.input, props.style]}
        onFocus={onFocus}
        // @ts-ignore
        ref={inputRef}
        editable={props.editable}
        secureTextEntry={isSecure}
        keyboardType={props.phonePad ? 'phone-pad' : 'default'}
        autoFocus={props.autoFocus}
        onChangeText={(text) => {
          let input = text;
          if (props.isPhoneNum) {
            input = formatPhoneNumber(text);
          }
          if (props.isCardNum) {
            let check = text.replace(/\D/g, '');
            if (check.length >= 16) {
              // @ts-ignore
              inputRef.current.blur();
            }
            console.log(text);
            input = formatCardNum(text);
          }
          setChangeText(input);
          props.onTextChange && props.onTextChange(input);
        }}
        value={changeText}
      />
    </View>
  );
});

export default FormTextInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    lineHeight: 17,
    fontSize: 14,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    paddingBottom: 8,
    padding: 0,
    color: colors.title,
  },
  textField: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: '#7D8699',
    marginBottom: Platform.OS === 'ios' ? 12 : 0,
    textTransform: 'uppercase',
  },
  container: {
    width: '100%',
  },
  passwordView: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  textShowPassword: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: '#7D8699',
    marginBottom: 12,
  },
  inputActive: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  inputInActive: {
    borderBottomWidth: 0,
  },
});
