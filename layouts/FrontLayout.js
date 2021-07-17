import { AvatarSelector } from "../components/Avatar";
import { GraphicButton } from "../components/Button";
import InputField from "../components/InputField";
import Logo from "../components/logo";

export default function FrontLayout({ sessionTitle }) {
  return (
    <div className="front-layout">
      <Logo />
      <AvatarSelector />
      <InputField value="" placeholder="Enter A Cool Name" />
      <GraphicButton
        title={sessionTitle}
        imageProps={{ src: "https://unsplash.com/photos/NWAnvRx5x3o", alt: "", width: 24, height: 24 }}
      />
      <div />
    </div>
  );
}
