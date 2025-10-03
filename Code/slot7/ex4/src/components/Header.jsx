import logo from "../assets/fpt.png"; 

export default function Header() {
  return (
    <header style={{ backgroundColor: "#f58220" }} className="text-center py-3">
  <div style={{ width: "1300px", height: "300px", margin: "0 auto" }}>
    <img 
      src={logo} 
      alt="FPT University" 
      style={{ width: "100%", height: "100%", objectFit: "contain" }} 
    />
  </div>
    </header>
  );
}