const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Cyriac Panackal</p>
          <p className="text-sm opacity-80">
            Migration • Integration • International Recruitment
          </p>
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
