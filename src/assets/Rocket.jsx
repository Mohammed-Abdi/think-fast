export default function Rocket(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.75 13.85l2.4 2.4m-2.4-2.4s1.417-3.542 3.434-6m-3.434 6c-5.219-1.305-.53-6 3.434-6m-1.034 8.4s3.542-1.417 6-3.434m-6 3.434c1.305 5.218 6 .53 6-3.434M11.184 7.85c2.04-2.486 5.403-3.6 8.566-3.6c0 3.163-1.114 6.525-3.6 8.566m-1.7-3.359l.707-.707m-9.638 7.826c-.952.801-1.269 3.179-1.269 3.179s2.372-.318 3.171-1.272c.45-.534.444-1.354-.057-1.85a1.394 1.394 0 0 0-1.845-.057"
      ></path>
    </svg>
  );
}
