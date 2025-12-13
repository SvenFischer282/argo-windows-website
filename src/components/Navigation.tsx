import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const products = [
    { label: "Okná", path: "/windows" },
    { label: "Dvere", path: "/doors" },
    { label: "Posuvné systémy", path: "/sliding-systems" },
    { label: "Hliník", path: "/aluminum" },
    { label: "Fasády", path: "/facades" },
  ];

  const homeLinks = [
    { label: "O nás", path: "/about-us" },
    { label: "Naše služby", path: "/our-services" },
    { label: "Produkcia", path: "/production" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            company
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
            >
              <Link
                to="/"
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                Domov
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {homeDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-background border border-border shadow-lg rounded-md py-1 z-50">
                  {homeLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                to="/windows"
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                Produkty
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-background border border-border shadow-lg rounded-md py-1 z-50">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              Kontakt
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-hover"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              to="/"
              className="block px-4 py-2 text-sm font-medium hover:bg-primary-hover rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Domov
            </Link>
            {homeLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 pl-8 text-sm font-medium hover:bg-primary-hover rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 text-sm font-semibold text-primary-foreground/80">
              Produkty
            </div>
            {products.map((product) => (
              <Link
                key={product.path}
                to={product.path}
                className="block px-4 py-2 pl-8 text-sm font-medium hover:bg-primary-hover rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {product.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm font-medium hover:bg-primary-hover rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
