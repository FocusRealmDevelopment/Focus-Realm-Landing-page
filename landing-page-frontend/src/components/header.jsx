const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">Logo</a>
        </div>
        <nav className="space-x-4">
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/products" className="text-gray-600 hover:text-gray-900">Products</a>
          <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
        </nav>
        <div>
          <a href="/signin" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
