import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.2687 18H34.9932L33 40H52.2687C54.3294 40 56 38.3015 56 36.2065V21.7935C56 19.6985 54.3294 18 52.2687 18Z"
        fill="#FF491F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 28H56V23H34.4682L33 28Z"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.8923 55H4.10766C1.83883 55 0 53.1958 0 50.97V4.0304C0 1.80424 1.83883 0 4.10766 0H30.8928C33.1612 0 35 1.80424 35 4.0304V50.97C35 53.1958 33.1612 55 30.8923 55Z"
        fill="#3C3F4D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1177 5H13.8823C13.395 5 13 4.55234 13 4C13 3.44766 13.395 3 13.8823 3H20.1177C20.605 3 21 3.44766 21 4C21 4.55234 20.605 5 20.1177 5Z"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 51.5C20 52.8808 18.8808 54 17.5002 54C16.1196 54 15 52.8808 15 51.5C15 50.1192 16.1196 49 17.5002 49C18.8808 49 20 50.1192 20 51.5Z"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.9393 7H5.06026C3.92226 7 3 7.91343 3 9.04V45.9604C3 47.087 3.92269 48 5.06026 48H28.9397C30.0777 48 31 47.087 31 45.9604V9.04C31 7.91343 30.0773 7 28.9393 7Z"
        fill="#C4E2F2"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 9.03915V45.9604C31 47.087 30.0721 48 28.9294 48H26C27.1439 48 28.0719 47.087 28.0719 45.9604V9.03915C28.0719 7.91258 27.1439 7 26 7H28.9294C30.0721 7 31 7.91258 31 9.03915Z"
        fill="#83B2C6"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 14V45H14.4089C11.4226 45 9 42.6069 9 39.6537V19.3467C9 16.3944 11.4226 14 14.4089 14H31Z"
        fill="#FF491F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 14H31V45H29V14Z"
        fill="#ED3618"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0781 20.7812H9.07812V27.7812H31.0781"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.2129 32.7812H36.9434C36.4655 32.7812 36.0781 32.3336 36.0781 31.7812C36.0781 31.2289 36.4655 30.7812 36.9434 30.7812H42.2129C42.6908 30.7812 43.0781 31.2289 43.0781 31.7812C43.0781 32.3336 42.6908 32.7812 42.2129 32.7812Z"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.2128 32.7812H44.9434C44.4655 32.7812 44.0781 32.3336 44.0781 31.7812C44.0781 31.2289 44.4655 30.7812 44.9434 30.7812H50.2128C50.6908 30.7812 51.0781 31.2289 51.0781 31.7812C51.0781 32.3336 50.6908 32.7812 50.2128 32.7812Z"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.0781 31.7812V33.7812H29.3401C28.6433 33.7812 28.0781 33.3334 28.0781 32.7812C28.0781 32.2284 28.6433 31.7813 29.3401 31.7813L32.0781 31.7812Z"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.9032 33.7812H17.253C16.6039 33.7812 16.0781 33.3334 16.0781 32.7812C16.0781 32.2287 16.6039 31.7812 17.253 31.7812H24.9032C25.5519 31.7812 26.0781 32.2287 26.0781 32.7812C26.0781 33.3334 25.5519 33.7812 24.9032 33.7812Z"
        fill="#2D303B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53 6.11515H44.0023V3L38 8.99979L44.0023 15V11.8848H53V6.11515Z"
        fill="#FF8E1D"
      />
    </Svg>
  );
}

const SvgCreditCard = React.memo(SvgComponent);
export default SvgCreditCard;
