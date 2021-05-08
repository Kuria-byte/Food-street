import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent() {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" >
            <Rect opacity={0.01} width={24} height={24} fill="black" />
            <Rect opacity={0.01} width={23.9766} height={23.9766} fill="black" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.6876 17.7371C18.964 17.7215 19.2437 17.8192 19.4534 18.0301L21.6863 20.2619C21.9401 20.5156 22.0392 20.8855 21.9463 21.2321C21.8534 21.5788 21.5827 21.8495 21.236 21.9424C20.8894 22.0353 20.5196 21.9362 20.2658 21.6824L18.034 19.4506C17.8316 19.2488 17.725 18.9702 17.741 18.6848L17.6178 18.5605C13.7802 21.8884 7.99653 21.5801 4.53452 17.863C1.0725 14.146 1.17533 8.35502 4.76713 4.76322C8.35893 1.17143 14.1499 1.0686 17.8669 4.53061C21.584 7.99263 21.8923 13.7763 18.5645 17.6139L18.6876 17.7371ZM11.4373 18.3689C13.9151 18.3689 16.2047 17.047 17.4436 14.9011C18.6825 12.7553 18.6825 10.1115 17.4436 7.96561C16.2047 5.81976 13.9151 4.49786 11.4373 4.49786C7.6069 4.49786 4.50177 7.60299 4.50177 11.4334C4.50177 15.2637 7.6069 18.3689 11.4373 18.3689Z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={21.9806}
                    y1={2.00024}
                    x2={2.00415}
                    y2={2.00024}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#82D84E" />
                    <Stop offset={1} stopColor="#0EAD69" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

const SvgSearch = React.memo(SvgComponent)
export default SvgSearch
