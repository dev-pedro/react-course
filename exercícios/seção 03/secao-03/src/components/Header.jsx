const Header = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">Seu Nome</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-blue-500">Início</a></li>
          <li><a href="#" className="hover:text-blue-500">Sobre Mim</a></li>
          <li><a href="#" className="hover:text-blue-500">Portfólio</a></li>
          <li><a href="#" className="hover:text-blue-500">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
