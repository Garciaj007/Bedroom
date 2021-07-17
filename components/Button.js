import Image from "next/image";

export function GraphicButton({ title, imageProps, className = "" }) {
  const { alt, ...image } = imageProps;
  return (
    <a role="button" className={className}>
      <Image alt={alt} {...image} />
      <span>{title}</span>
    </a>
  );
}

export function Button({ title, className = "" }) {
  return (
    <a role="button" className={`${className} `}>
      {title}
    </a>
  );
}
