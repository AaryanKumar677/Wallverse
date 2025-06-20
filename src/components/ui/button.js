// components/ui/button.js

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
