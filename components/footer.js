function Footer() {
  return (
    <footer className="p-10 text-soft">&copy; {(new Date()).getFullYear()}
      <style jsx>{`
        footer {
          width: 100%;
          text-align: right;
          padding: 20px;
          position:absolute;
          bottom:0;
      `}</style>
    </footer>

  );
}

export default Footer;