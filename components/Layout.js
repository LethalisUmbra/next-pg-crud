import Nav from "./Nav";

export function Layout({ children }) {
  return (
    <div className="bg-gray-100 h-screen">
      <Nav/>
      <div className="p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
    </div>
  );
}
