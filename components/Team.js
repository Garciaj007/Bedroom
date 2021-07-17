import { Avatar } from "./Avatar";

export default function TeamContainer({ number, members, onClick }) {
  <a role="button" onClick={onClick}>
    <div>T{number}</div>
    <div>
      {members.map((elem, indx) => (
        <Avatar key={`t${number}-${elem.name}-${indx}`} {...elem} />
      ))}
    </div>
  </a>;
}
