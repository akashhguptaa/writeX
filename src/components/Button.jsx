const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary", // primary, secondary, or outline
}) => {
  const baseStyles =
    "px-8 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-110 active:scale-95";

  const variants = {
    primary:
      "bg-white text-blue-600 hover:bg-blue-50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
    secondary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    startWriting: "text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:bg-gradient-to-br hover:from-teal-700 hover:to-slate-950 shadow-md dark:shadow-lg dark:shadow-teal-800 font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2"  };
    console.log(variants[variant])
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
