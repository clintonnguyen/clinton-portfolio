import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/clintonnguyen" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/clinton-nguyen-308a56209/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.href}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
