import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const mail = "mailto:" + "iantsiakkas@gmail.com";
const addr = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const gthb = "https://github.com/" + "Keybraker";
const twtr = "https://twitter.com/" + "RealTsiakkas";
const lnkd = "https://www.linkedin.com/in/" + "ioannis-t-3365151a2";

function AboutPageInner() {
  return (
    <div className="flex flex-row flex-start justify-around items-center gap-4 align-baseline">
      <a rel="noopener noreferrer" target="_blank" href={addr}>
        <MdLocationOn size={"1.3rem"} />
      </a>
      <a rel="noopener noreferrer" target="_blank" href={mail}>
        <MdEmail size={"1.3rem"} />
      </a>
      <a rel="noopener noreferrer" target="_blank" href={gthb}>
        <FaGithub size={"1.3rem"} />
      </a>
      <a rel="noopener noreferrer" target="_blank" href={lnkd}>
        <FaLinkedin size={"1.3rem"} />
      </a>
      <a rel="noopener noreferrer" target="_blank" href={twtr}>
        <FaTwitter size={"1.3rem"} />
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <>
      <div className="flex flex-col xs:flex-row gap-2 justify-between items-center xs:items-stretch">
        <span className="flex flex-col gap-0.5 xs:gap-2 tn:flex-row items-center text-2xl font-helvetica font-semibold antialiased">
          <span>Ioannis</span>
          <span>Tsiakkas</span>
        </span>
        <AboutPageInner></AboutPageInner>
      </div>
      <div className="border border-black mb-4"></div>
    </>
  );
}