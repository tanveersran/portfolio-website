const Header = ({title}) => {
  return (
    <header className="fixed top-0 left-0 w-screen p-6 text-center flex bg-tertiary flex-col gap-4 lg:text-left lg:gap-12">
        <h1 className="text-3xl lg:text-6xl">{title}</h1>
    </header>
  );
}

export default Header;