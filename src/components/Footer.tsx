import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border-muted bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-2">AppFlow</div>
            <p className="text-muted-foreground text-sm">
              © 2025 AppFlow. Todos os direitos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-sm mr-2 hidden md:block">
              Siga-nos:
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-muted hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;