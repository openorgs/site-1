import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const dash = keyframes`
  to {
    stroke-dashoffset: 2;
    stroke-dasharray: 72;
  }
`

const Base = styled.svg`
  display: none;
  @media screen and (min-width: 48em) and (min-height: 42em) {
    position: absolute;
    top: 30%;
    left: 52%;
    display: block;
    width: 256px;
    height: 128px;
    path {
      animation: ${dash} 2.5s cubic-bezier(0.625, 0.25, 0.25, 0.875) forwards;
      stroke: #fff;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 72;
      stroke-dashoffset: 72;
    }
  }
  @media screen and (min-width: 64em) and (min-height: 48em) {
    top: 33%;
  }
`

class Possibility extends Component {
  state = { visible: false }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true })
    }, 4000)
  }

  render() {
    return (
      this.state.visible && (
        <Base
          width="128"
          height="64"
          viewBox="0 0 128 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.27886 27.6738C4.18716 27.628 3.89436 28.9425 3.89136 28.9525C3.65996 29.7189 3.39136 30.4736 3.15516 31.2386C2.71306 32.67 2.32956 34.1184 1.99266 35.5783C1.87356 36.0946 1.45776 37.0344 1.64396 37.5932C1.75756 37.934 2.76676 38.4034 3.00016 38.5231C4.20426 39.1406 5.46996 39.6301 6.68116 40.228C7.44646 40.6058 9.66476 42.145 9.66476 42.0492" />
          <path d="M2.76631 38.2891C2.55291 37.8624 3.21621 37.3088 3.45461 37.0108C4.65531 35.5099 6.06591 34.2281 7.68311 33.1756C13.1648 29.6082 19.9058 27.3738 26.4653 27.3738" />
          <path d="M26.2285 15.8117C28.2995 15.8117 30.9855 14.855 32.9965 14.3819C33.6625 14.2252 34.3295 14.0486 34.9975 13.9053C35.1785 13.8667 36.2145 13.6784 36.0465 13.7623" />
          <path d="M31.2803 15.5259C31.8293 18.8225 32.9483 22.1952 32.9483 25.5347" />
          <path d="M40.0488 12.3325C41.3168 14.8679 41.2358 18.4479 42.0508 21.1974C42.3028 22.0468 42.9088 25.0383 42.9088 24.915" />
          <path d="M42.1816 18.7633C43.501 18.5 45.0166 18.1454 46.1586 17.9008L48.001 17.5" />
          <path d="M47.627 11.9512C48 14.5 48.398 17.1159 48.628 19.577C48.706 20.4013 48.744 21.2307 48.819 22.0553C48.838 22.2691 49.0099 23.6282 49.0099 23.6282" />
          <path d="M54.0163 16.3196C54.0163 17.6231 53.8983 18.9991 54.0163 20.2967C54.0633 20.8148 54.1603 22.1175 54.1603 22.1175" />
          <path d="M53.249 12.2466V12.1508V11.9591V11.8633V11.7675V11.6716" />
          <path d="M63.569 9.55737C62.627 9.55737 61.993 9.64737 61.109 10.0094C60.527 10.2474 60.08 10.5491 59.552 10.9133C55.072 14.0029 62.386 14.5499 64.373 15.6337C64.914 15.9288 65.519 16.3333 65.628 16.9896C65.889 18.5562 63.398 20.012 62.213 20.555C61.787 20.7503 60.798 21.0892 60.506 20.5048" />
          <path d="M79.2374 9.65771C75.4874 9.65771 73.1394 15.887 75.3204 18.8474C76.7734 20.8191 78.8384 19.6007 80.6434 19.6007" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M86.5252 9.10524C86.6502 9.23694 85.6172 10.9597 85.3882 11.5869C84.5272 13.9569 84.1942 18.9148 87.9402 19.2405C91.7462 19.5715 91.4962 12.3574 90.3522 10.4272C89.6762 9.28614 86.3102 8.87824 86.5252 9.10524Z"
          />
          <path d="M96.8927 9.31396C96.5567 9.81756 96.5607 11.1555 96.5217 11.5869C96.3147 13.8618 96.2647 16.9305 97.6817 18.8695C99.5997 21.494 102.33 20.0555 103.526 17.6634C103.958 16.7993 104.262 15.7981 104.361 14.8339C104.563 12.8677 103.711 11.9548 103.387 10.3344" />
          <path d="M108.762 9.69287C108.762 12.509 108.634 15.3838 108.762 18.1986C108.792 18.8704 108.803 20.8759 109.751 21.0339C111.627 21.3467 113.546 19.913 115.355 19.913" />
          <path d="M119.171 9.61719C118.939 10.3157 119.191 11.3439 119.234 12.0744C119.335 13.8263 119.327 15.6377 119.234 17.3933C119.211 17.8178 118.794 19.6907 119.296 20.1927" />
          <path d="M119.297 8.87088C120.629 7.98288 123.034 9.10868 124.118 10.1772C126.644 12.667 126.701 16.4657 124.087 18.9487C123.112 19.8748 121.366 21.5323 119.857 20.8461" />
          <path d="M29.1592 38.2793C29.8752 41.1454 31.1862 43.8818 32.0002 46.7305C32.1362 47.2067 32.8742 51.4929 32.8742 50.1547" />
          <path d="M29.6689 37.8422C29.8699 37.4396 30.7439 37.2604 30.9799 37.1865C32.6199 36.6742 34.3709 36.5308 36.0799 36.5308C36.7299 36.5308 38.4169 36.5693 38.5569 37.6236C38.8999 40.1981 36.1559 41.8354 34.2589 42.942C34.1909 42.9818 31.882 44.2807 32.146 44.5448C32.522 44.9212 33.8509 44.2195 34.1859 44.1077C35.6379 43.6237 39.22 42.2586 40.16 44.3263C41.78 47.8905 35.8429 50.5221 33.2389 50.9561" />
          <path d="M47.4458 34.1265C46.4078 34.1265 45.1058 34.7496 44.3138 35.0008C43.7178 35.1896 42.1588 35.6036 41.9818 36.3122C41.8428 36.8702 42.2857 37.6659 42.4187 38.1336C42.7417 39.2632 42.9658 40.412 43.2208 41.5578C43.6228 43.3661 44.2868 47.0234 45.9168 48.1876C46.5048 48.608 47.5228 47.7048 47.9558 47.4591C49.4378 46.6196 51.0238 45.8562 52.7648 45.8562" />
          <path d="M43.6572 41.4119C45.3102 41.1757 46.4712 40.4791 48.2472 39.8091" />
          <path d="M59.4678 33.2523C59.4678 36.8428 61.7118 39.4608 65.0048 38.8621C66.4788 38.5941 68.3758 37.1847 68.7928 35.6565C68.9618 35.0379 69.1258 34.0697 68.7928 33.4708C68.5368 33.0097 67.8458 32.504 67.8458 33.3251" />
          <path d="M64.7852 39.5176C64.7852 41.7075 64.7662 40.0493 65.6592 45.3461C65.6942 45.5507 65.8782 46.1364 65.8782 45.9289" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74.402 31.7952C72.4997 34.5 72.5 35.2963 72.5004 37C72.5009 39 72.4595 40.6967 73.163 42.1406C73.866 43.5845 75.442 44.7516 77.098 44.1076C80.645 42.7282 80.967 37.9536 80.303 34.855C80.083 33.8275 79.82 32.6063 78.846 32.0136C77.443 31.1595 75.878 31.3497 74.402 31.7952Z"
          />
          <path d="M84.1654 31C84 31.5 83.9438 34.7816 84.1648 35.9477C84.6358 38.4416 87.0329 42.9072 90.1389 42.2861C91.1099 42.092 92.1148 40.9722 92.6888 40.2462C93.4598 39.2695 93.4169 39.0817 93.7809 37.5505C94.0439 36.4465 94.0328 35.1772 93.9998 34.0535C93.9548 32.5301 93.2778 31.3706 92.6158 30.0464" />
          <path d="M99.2925 38.1646C99.0001 35 99.501 31.5 101 29" />
          <path d="M99.3916 42.2863C99.3916 42.2378 99.3916 42.1892 99.3916 42.1406" />
          <path d="M104 37.5C103.682 33.6884 104.85 31.3665 107 28.5" />
          <path d="M103.398 41.7034C103.578 41.5233 103.544 41.489 103.544 41.7034" />
          <path d="M67.3672 54.7853C68.0732 53.8449 69.7332 53.0178 70.4442 52.5972C73.9052 50.5523 77.8122 49.0719 81.7272 48.2209C82.5132 48.05 85.0332 47.326 85.6252 48.0158C86.1512 48.6297 84.5462 49.8913 84.2572 50.1355C82.6162 51.5204 80.9492 52.8754 79.4702 54.4434C79.2872 54.638 78.4872 55.6851 78.7872 56.0844C79.3622 56.8511 80.7192 56.1357 81.6592 55.9478C83.5072 55.578 85.3042 54.9869 87.1292 54.5118C96.5232 52.0654 105.783 49.2032 115.164 46.7166" />
        </Base>
      )
    )
  }
}

export default Possibility
