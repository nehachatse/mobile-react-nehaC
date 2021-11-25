import ListItem from "./ListItem";

export default function Card({ arr }) {
  return (
    <>
      <ul>
        <ListItem item={arr[0]} />
        <ListItem item={arr[1]} />
        <ListItem item={arr[2]} />
        <ListItem item={arr[3]} />
      </ul>
    </>
  );
}
