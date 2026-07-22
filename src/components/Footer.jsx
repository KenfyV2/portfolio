import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/tech/linkedin.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-black/40 to-transparent border-t border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-secondary">

        {/* Icons + Resume */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/KenfyV2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-8 h-8 hover:scale-110 hover:drop-shadow-[0_0_6px_#9c66ff] transition"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/andrewlugo-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 hover:scale-110 hover:drop-shadow-[0_0_6px_#9c66ff] transition"
            />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Andrew Lugo. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
