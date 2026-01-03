import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses = "inline-block px-6 py-3 rounded-lg font-medium transition-all text-center";

  const variantClasses = {
    primary: "bg-electric text-white hover:bg-electric-dark shadow-sm hover:shadow-md",
    secondary: "bg-black text-white hover:bg-gray-800 shadow-sm hover:shadow-md",
    outline: "border-2 border-electric text-electric hover:bg-electric hover:text-white",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
