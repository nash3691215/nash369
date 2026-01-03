interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const hoverClasses = hover ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-200" : "";

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
