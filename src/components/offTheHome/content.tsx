interface ContentProps {
  children?: any;
}

export default function Content(props: ContentProps) {
  return (
    <div
      className={`
           flex flex-col bg-gray-50 dark:bg-gray-800
            dark:text-gray-200
        `}
    >
      <div className={`w-11/12 mx-auto`}>{props.children}</div>
    </div>
  );
}
