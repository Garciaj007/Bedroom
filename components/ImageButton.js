import Image from "next/image";

export default function ImageButton({ imageProps, title, onClick }) {
  <a role="button" onClick={() => onClick(title)}>
    <Image {...imageProps} alt={title} />
  </a>;
}
