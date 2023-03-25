import { NavBar } from "../NavBar/NavBar";
import { Subheader } from "../Subheader/Subheader";
import { WhatsAppLink } from "../WhatsAppLink/WhatsAppLink";

export function Home(): JSX.Element {
  return (
    <>
      <NavBar />
      <Subheader />
      <WhatsAppLink />
    </>
  );
}
