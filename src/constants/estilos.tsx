import { ScreenWidth } from "@rneui/base";
import { color, ScreenHeight } from "react-native-elements/dist/helpers";

let large = ScreenWidth*0.9;
let medium = ScreenWidth*0.8;
let small = ScreenWidth*0.4;

let heightButton =  ScreenHeight*0.08;
let heightInput = ScreenHeight*0.08;

import { createTheme } from '@rneui/themed';

export const colors = {
    primary: '#DB410A',
    primary2: '#E29112',
    background: '#ffff',
}

export const theme = createTheme({
    components: {
      Button: {
        raised: true,
      },
    },
    
    lightColors: {
      primary: colors.primary2,
    },
    darkColors: {
      primary: colors.primary,
    },
    mode: 'light',
});

export const orangeGradient = {
    colors: ['#DB410A', '#E29112'],
    start: {x: 0, y: 0.5},
    end: {x: 1, y: 0.5},
}

export const buttonGhost = {
    borderWidth: 1.5,
    borderColor: colors.primary2,
    backgroundColor: colors.background,
    width: large,
    height: heightButton,
    borderRadius: 20,
}

export const buttonGhostMedium = {
    borderWidth: 1.5,
    borderColor: colors.primary2,
    backgroundColor: colors.background,
    width: medium,
    height: heightButton,
    borderRadius: 20,
}

export const buttonGhostSmall = {
    borderWidth: 1.5,
    borderColor: colors.primary2,
    backgroundColor: colors.background,
    width: small,
    height: heightButton,
    borderRadius: 20,
}

export const buttonLarge = {
    width: large,
    height: heightButton,
    borderRadius: 20,
}

export const buttonMedium = {
    width: medium,
    height: heightButton,
    borderRadius: 20,
}

export const buttonSmall = {
    width: small,
    height: heightButton,
    borderRadius: 20,
}

export const inputText = {
    height: heightInput,
    borderRadius: 20,
    fontSize: 14,
    marginLeft: 10,
    borderColor: colors.primary2,
    backgroundColor: colors.background, 
}

export const inputTextSmall = {
    height: heightInput,
    width: small,
    borderRadius: 20,
    fontSize: 14,
    marginLeft: 10,
    borderColor: colors.primary2,
    backgroundColor: colors.background, 
}

export const inputTextContainer = {
    top: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderBottomWidth: 1.5,
    borderColor: colors.primary2,
    backgroundColor: colors.background,
}

export const inputTextContainerSmall = {
    width: small,
    top: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderBottomWidth: 1.5,
    borderColor: colors.primary2,
    backgroundColor: colors.background,
}

export const inputTextArea = {
    height: heightInput*2,
    borderRadius: 20,
    borderColor: colors.primary2,
    backgroundColor: colors.background,
    fontSize: 14,
    textAlign: 'left',
    textAlignVertical: 'top',
}


export const formContainer = {
    jusifyContent: 'space-between',
    alingItems: 'center',
    height: ScreenHeight, 
    width: '90%',
    marginLeft: '5%',
}

export const buttonContainer = {
    top: '5%',
    marginHorizontal: "3%",
    justifyContent: "space-between",
    flexDirection: "row",
}

export const label = {
    fontColor: '#1c1c1c',
    fontWeight: 'bold',
    fontSize: 18,
}