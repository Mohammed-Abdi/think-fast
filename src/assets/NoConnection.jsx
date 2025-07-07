export default function NoConnection(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      {...props}
    >
      <mask id="lineMdCloudAltOffLoop0">
        <g
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <path
            strokeDasharray={64}
            strokeDashoffset={64}
            d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.66s"
              values="64;0"
            ></animate>
            <set
              fill="freeze"
              attributeName="opacity"
              begin="0.77s"
              to={0}
            ></set>
          </path>
          <g fill="#fff" stroke="none" opacity={0}>
            <circle cx={12} cy={10} r={6}>
              <animate
                attributeName="cx"
                begin="0.77s"
                dur="33s"
                repeatCount="indefinite"
                values="12;11;12;13;12"
              ></animate>
            </circle>
            <rect width={9} height={8} x={8} y={12}></rect>
            <rect width={15} height={12} x={1} y={8} rx={6}>
              <animate
                attributeName="x"
                begin="0.77s"
                dur="23.1s"
                repeatCount="indefinite"
                values="1;0;1;2;1"
              ></animate>
            </rect>
            <rect width={13} height={10} x={10} y={10} rx={5}>
              <animate
                attributeName="x"
                begin="0.77s"
                dur="18.7s"
                repeatCount="indefinite"
                values="10;9;10;11;10"
              ></animate>
            </rect>
            <set
              fill="freeze"
              attributeName="opacity"
              begin="0.77s"
              to={1}
            ></set>
          </g>
          <g fill="#000" fillOpacity={0} stroke="none">
            <circle cx={12} cy={10} r={4}>
              <animate
                attributeName="cx"
                begin="0.77s"
                dur="33s"
                repeatCount="indefinite"
                values="12;11;12;13;12"
              ></animate>
            </circle>
            <rect width={9} height={6} x={8} y={12}></rect>
            <rect width={11} height={8} x={3} y={10} rx={4}>
              <animate
                attributeName="x"
                begin="0.77s"
                dur="23.1s"
                repeatCount="indefinite"
                values="3;2;3;4;3"
              ></animate>
            </rect>
            <rect width={9} height={6} x={12} y={12} rx={3}>
              <animate
                attributeName="x"
                begin="0.77s"
                dur="18.7s"
                repeatCount="indefinite"
                values="12;11;12;13;12"
              ></animate>
            </rect>
            <set
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.77s"
              to={1}
            ></set>
          </g>
          <path
            stroke="#000"
            strokeDasharray={28}
            strokeDashoffset={28}
            d="M1 11h24"
            transform="rotate(45 13 12)"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.77s"
              dur="0.44s"
              values="28;0"
            ></animate>
          </path>
          <path
            strokeDasharray={28}
            strokeDashoffset={28}
            d="M1 13h22"
            transform="rotate(45 13 12)"
          >
            <animate
              attributeName="d"
              begin="1.21s"
              dur="6.6s"
              repeatCount="indefinite"
              values="M1 13h22;M3 13h22;M1 13h22"
            ></animate>
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.77s"
              dur="0.44s"
              values="28;0"
            ></animate>
          </path>
        </g>
      </mask>
      <rect
        width={24}
        height={24}
        fill="currentColor"
        mask="url(#lineMdCloudAltOffLoop0)"
      ></rect>
    </svg>
  );
}
