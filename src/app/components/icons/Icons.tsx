import * as React from 'react';
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export const IconError = (props: SvgProps) => (
  <Svg width={36} height={36} {...props}>
    <Path
      d={
        'M18 24.671a1.87 1.87 0 00-1.85 1.85 1.87 1.87 0 001.85 1.85c.969 0 1.85-.843 1.805-1.805A1.806 1.806 0 0018 24.67z'
      }
      fill={'#F44336'}
    />
    <Path
      d={
        'M35.124 31.228c1.162-2.005 1.17-4.396.015-6.394l-11.59-20.07c-1.146-2.02-3.218-3.219-5.542-3.219a6.32 6.32 0 00-5.543 3.212L.86 24.85a6.368 6.368 0 00.022 6.431 6.333 6.333 0 005.529 3.175h23.148c2.316 0 4.396-1.207 5.565-3.227zm-2.516-1.45a3.497 3.497 0 01-3.057 1.768H6.403a3.45 3.45 0 01-3.02-1.731 3.502 3.502 0 01-.007-3.53L14.98 6.2a3.434 3.434 0 013.027-1.754 3.45 3.45 0 013.027 1.762L32.63 26.292c.622 1.08.614 2.383-.022 3.486z'
      }
      fill={'#F44336'}
    />
    <Path
      d={
        'M17.54 11.684c-.88.251-1.428 1.05-1.428 2.02.045.585.082 1.177.126 1.761l.378 6.639A1.356 1.356 0 0018 23.406c.754 0 1.346-.585 1.383-1.347 0-.459 0-.88.045-1.347.081-1.428.17-2.856.251-4.285.045-.925.126-1.85.17-2.775 0-.333-.044-.629-.17-.925a1.855 1.855 0 00-2.138-1.043z'
      }
      fill={'#F44336'}
    />
  </Svg>
);
export const IconSuccess = (props: SvgProps) => (
  <Svg width={36} height={36} {...props}>
    <Path
      d={
        'M34.97 4.922a1.356 1.356 0 00-1.918-.003L16.775 21.153l-5.872-6.378a1.357 1.357 0 00-1.997 1.838l6.83 7.417a1.355 1.355 0 001.956.042L34.968 6.84c.53-.529.532-1.388.003-1.918z'
      }
      fill={'#009901'}
    />
    <Path
      d={
        'M34.643 16.643c-.75 0-1.357.608-1.357 1.357 0 8.43-6.857 15.286-15.286 15.286C9.571 33.286 2.714 26.43 2.714 18 2.714 9.571 9.57 2.714 18 2.714A1.357 1.357 0 1018 0C8.075 0 0 8.075 0 18s8.075 18 18 18 18-8.075 18-18c0-.75-.607-1.357-1.357-1.357z'
      }
      fill={'#009901'}
    />
  </Svg>
);
export const IconInformation = (props: SvgProps) => (
  <Svg width={36} height={36} {...props}>
    <Path
      d={
        'M18 0C8.05 0 0 8.051 0 18c0 9.95 8.051 18 18 18 9.95 0 18-8.051 18-18 0-9.95-8.051-18-18-18zm0 33.188C9.605 33.188 2.812 26.393 2.812 18 2.813 9.605 9.607 2.812 18 2.812c8.395 0 15.188 6.794 15.188 15.188 0 8.395-6.794 15.188-15.188 15.188z'
      }
      fill={'#2B4BF2'}
    />
    <Path
      d={
        'M18 15.07c-.777 0-1.406.63-1.406 1.406v9.056a1.406 1.406 0 102.812 0v-9.056c0-.776-.63-1.406-1.406-1.406zm1.898-3.62a1.83 1.83 0 00-.556-1.343A1.83 1.83 0 0018 9.551a1.83 1.83 0 00-1.342.556 1.83 1.83 0 00-.556 1.343c0 .524.185.971.556 1.342.37.37.818.556 1.342.556a1.83 1.83 0 001.342-.556c.371-.37.556-.818.556-1.342'
      }
      fill={'#2B4BF2'}
    />
  </Svg>
);
export const TickIcon = (props: SvgProps) => (
  <Svg width={18} height={18} {...props}>
    <Path
      fillRule={'evenodd'}
      fill={'#28D0DD'}
      d={
        'M9 18c-4.95 0-9-4.05-9-9s4.05-9 9-9 9 4.05 9 9-4.05 9-9 9zm5.04-13.86L7.2 10.98 3.96 7.74 2.7 9l4.5 4.5 8.1-8.1-1.26-1.26z'
      }
    />
  </Svg>
);
export const FacebookIcon = (props: SvgProps) => (
  <Svg width="40px" height="41px" {...props}>
    <Defs>
      <LinearGradient id="a" x1="0%" x2="100%" y1="0%" y2="0%">
        <Stop offset="0%" stopColor="#102397" />
        <Stop offset="55%" stopColor="#187ADF" />
        <Stop offset="100%" stopColor="#00EAF8" />
      </LinearGradient>
    </Defs>
    <Path
      fillRule="evenodd"
      fill="#5D7DE9"
      d="M20.179.975C30.954.975 39.69 9.717 39.69 20.5c0 10.783-8.736 19.525-19.511 19.525C9.403 40.025.667 31.283.667 20.5.667 9.717 9.403.975 20.179.975z"
    />
    <Path
      fill="url(#a)"
      d="M20.179.975C30.954.975 39.69 9.717 39.69 20.5c0 10.783-8.736 19.525-19.511 19.525C9.403 40.025.667 31.283.667 20.5.667 9.717 9.403.975 20.179.975z"
    />
    <Path
      fillRule="evenodd"
      fill="#FFF"
      d="M25.159 17.376h-3.13V15.31c0-.776.51-.957.87-.957h2.209v-3.41l-3.042-.012c-3.377 0-4.146 2.543-4.146 4.171v2.274h-1.953v3.514h1.953v9.945h4.109V20.89H24.8l.359-3.514z"
    />
  </Svg>
);
export const GoogleIcon = (props: SvgProps) => (
  <Svg width="40px" height="41px" {...props}>
    <Defs>
      <LinearGradient id="a" x1="0%" x2="100%" y1="0%" y2="0%">
        <Stop offset="0%" stopColor="#FF4F38" />
        <Stop offset="100%" stopColor="#FF355D" />
      </LinearGradient>
    </Defs>
    <Path
      fillRule="evenodd"
      fill="#5D7DE9"
      d="M20.425.975C31.208.975 39.95 9.717 39.95 20.5c0 10.783-8.742 19.525-19.525 19.525C9.642 40.025.9 31.283.9 20.5.9 9.717 9.642.975 20.425.975z"
    />
    <Path
      fill="url(#a)"
      d="M20.425.975C31.208.975 39.95 9.717 39.95 20.5c0 10.783-8.742 19.525-19.525 19.525C9.642 40.025.9 31.283.9 20.5.9 9.717 9.642.975 20.425.975z"
    />
    <Path
      fillRule="evenodd"
      fill="#FFF"
      d="M29.985 19.134h-8.874c0 1.259-.002 2.518 0 3.777h5.139a4.555 4.555 0 01-1.888 2.989 5.296 5.296 0 01-2.076.841c-.743.13-1.51.147-2.251-.007a5.461 5.461 0 01-2.099-.93 6 6 0 01-2.161-2.972 6.002 6.002 0 01.002-3.768 6.028 6.028 0 011.368-2.282 5.569 5.569 0 012.816-1.605 5.452 5.452 0 012.769.115c.76.237 1.46.664 2.033 1.226.58-.591 1.157-1.186 1.736-1.779.303-.319.622-.624.916-.952a9.085 9.085 0 00-3.035-1.93 9.312 9.312 0 00-6.352-.057c-2.299.808-4.257 2.573-5.342 4.803a9.807 9.807 0 00-.82 2.432 9.916 9.916 0 00.819 6.258 9.687 9.687 0 002.562 3.231 9.287 9.287 0 003.426 1.774c1.571.432 3.244.422 4.825.053a8.45 8.45 0 003.861-2.061c1.141-1.076 1.955-2.494 2.386-4.018.47-1.662.535-3.436.24-5.138z"
    />
  </Svg>
);
export const TweetIcon = (props: SvgProps) => (
  <Svg width="40px" height="41px" {...props}>
    <Defs>
      <LinearGradient id="a" x1="0%" x2="100%" y1="0%" y2="0%">
        <Stop offset="0%" stopColor="#17EAD9" />
        <Stop offset="100%" stopColor="#6078EA" />
      </LinearGradient>
    </Defs>
    <Path
      fillRule="evenodd"
      fill="#5D7DE9"
      d="M19.575.975C30.358.975 39.1 9.717 39.1 20.5c0 10.783-8.742 19.525-19.525 19.525C8.792 40.025.05 31.283.05 20.5.05 9.717 8.792.975 19.575.975z"
    />
    <Path
      fill="url(#a)"
      d="M19.575.975C30.358.975 39.1 9.717 39.1 20.5c0 10.783-8.742 19.525-19.525 19.525C8.792 40.025.05 31.283.05 20.5.05 9.717 8.792.975 19.575.975z"
    />
    <Path
      fillRule="evenodd"
      fill="#FFF"
      d="M31.843 12.781c-.906.406-1.881.681-2.904.804a5.108 5.108 0 002.223-2.825 10.057 10.057 0 01-3.211 1.239 5.026 5.026 0 00-3.69-1.612c-2.793 0-5.057 2.286-5.057 5.106 0 .4.045.79.131 1.163-4.202-.212-7.929-2.245-10.422-5.335a5.112 5.112 0 00-.685 2.567 5.12 5.12 0 002.249 4.251 5.013 5.013 0 01-2.29-.639v.064c0 2.474 1.743 4.538 4.056 5.007a5.044 5.044 0 01-2.284.087c.644 2.029 2.511 3.505 4.724 3.546a10.082 10.082 0 01-6.28 2.186c-.408 0-.811-.024-1.206-.071a14.208 14.208 0 007.751 2.294c9.301 0 14.387-7.781 14.387-14.528 0-.221-.005-.442-.015-.661a10.315 10.315 0 002.523-2.643z"
    />
  </Svg>
);
export const LinkingIcon = (props: SvgProps) => (
  <Svg width="40px" height="41px" {...props}>
    <Defs>
      <LinearGradient id="a" x1="0%" x2="100%" y1="0%" y2="0%">
        <Stop offset="0%" stopColor="#00C6FB" />
        <Stop offset="100%" stopColor="#005BEA" />
      </LinearGradient>
    </Defs>
    <Path
      fillRule="evenodd"
      fill="#5D7DE9"
      d="M19.821.975c10.776 0 19.511 8.742 19.511 19.525 0 10.783-8.735 19.525-19.511 19.525S.31 31.283.31 20.5C.31 9.717 9.045.975 19.821.975z"
    />
    <Path
      fill="url(#a)"
      d="M19.821.975c10.776 0 19.511 8.742 19.511 19.525 0 10.783-8.735 19.525-19.511 19.525S.31 31.283.31 20.5C.31 9.717 9.045.975 19.821.975z"
    />
    <Path
      fillRule="evenodd"
      fill="#FFF"
      d="M31 23.13v7.49h-4.338v-6.989c0-1.755-.628-2.954-2.198-2.954-1.199 0-1.912.808-2.226 1.589-.114.279-.144.668-.144 1.059v7.295h-4.339s.058-11.837 0-13.063h4.339v1.852l-.029.042h.029v-.042c.576-.889 1.606-2.159 3.911-2.159 2.855 0 4.995 1.867 4.995 5.88zM13.215 11.26c-1.484 0-2.455.975-2.455 2.257 0 1.253.943 2.258 2.398 2.258h.029c1.513 0 2.454-1.004 2.454-2.258-.028-1.282-.941-2.257-2.426-2.257zm-2.197 19.36h4.338V17.557h-4.338V30.62z"
    />
  </Svg>
);
