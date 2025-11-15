import { X } from "lucide-react";
import { Link } from "wouter";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  if (!isOpen) return null;

  const menuItems = [
    { label: "Tutoring", path: "/tutoring" },
    { label: "Packages", path: "/packages" },
    { label: "Book", path: "/book" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact", path: "/contact" },
    { label: "Research & Portfolio", path: "/portfolio" },
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 p-2 hover-elevate active-elevate-2 rounded-md"
        data-testid="button-close-menu"
        aria-label="Close menu"
      >
        <X className="w-8 h-8 text-foreground" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={onClose}
            data-testid={`link-menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="aspect-square flex items-center justify-center border-2 border-primary/30 rounded-md hover-elevate active-elevate-2 transition-all duration-200 cursor-pointer group">
              <span className="text-2xl md:text-3xl font-display font-medium text-foreground group-hover:text-primary transition-colors text-center px-4">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
