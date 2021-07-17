import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex">
      <span>Bedroom</span>
      <span>
        <Image src="/vercel.svg" alt="Bedroom Logo" width={64} height={64} />
      </span>
    </div>
  );
}
