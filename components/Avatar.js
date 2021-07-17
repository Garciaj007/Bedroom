import Image from "next/image";
import useSWR from "swr";

export function AvatarSelector() {
  //TODO Load Avatar Images...

  const onClick = () => {};

  return (
    <div className="avatarSelector">
      <a onClick={onClick}>
        <Image src={"https://unsplash.com/photos/LhqLdDPcSV8"} alt="Avatar" width={320} height={320} />
        <Image src="https://unsplash.com/photos/NWAnvRx5x3o" alt="Change Image" width={96} height={96} />
      </a>
      <div></div>
    </div>
  );
}

export function Avatar({ avatar, name }) {
  return <Image src={avatar} alt={name} />;
}

export function AvatarTag({ avatar, name }) {
  return (
    <div>
      <Image src={avatar} alt={name} />
      <span>{name}</span>
    </div>
  );
}
