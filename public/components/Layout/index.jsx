export default function LayoutIndex(props) {
  return (
    <div className="max-w-screen-sm min-h-screen w-full h-full bg-white mx-auto">
      {props.children}
    </div>
  );
}
