interface ContentProps {
  children?: any;
}

export default function Content(props: ContentProps) {
  return (
    <div
      className={`
           flex flex-col bg-gray-300 dark:bg-gray-800
           max-w-6xl mx-auto dark:text-gray-200
        `}
    >
      {props.children}
    </div>
  );
}
