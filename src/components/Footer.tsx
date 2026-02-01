const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm sm:text-base text-muted-foreground">
            © {new Date().getFullYear()} Dinesh (DK). All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            This page is created by{" "}
            <a 
              href="https://linkedin.com/in/nishanthnaa52/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              Nishanth
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
