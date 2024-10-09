import { GitHubIcon } from "./svg/GitHubIcon";

export const GitHubLink = () => {
  return (
    <>
      <a href="https://github.com/pom421/octets-blog" target="_blank">
        <span className="sr-only">
          Aller sur le repository GitHub d'octets blog
        </span>
        <div className="w-8 text-gray-400">
          <GitHubIcon />
        </div>
      </a>
    </>
  );
};
