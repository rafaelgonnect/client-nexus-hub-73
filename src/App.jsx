import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col">
              <header className="bg-white shadow-md p-4 flex justify-between items-center md:hidden">
                <Button variant="ghost" onClick={() => setSidebarOpen(true)}>
                  <Menu className="h-6 w-6" />
                </Button>
                <h1 className="text-2xl font-bold">Cont<span className="text-blue-500">AI</span>bil</h1>
              </header>
              <main className="flex-1 p-4 md:p-8 overflow-auto">
                <Routes>
                  {navItems.map(({ to, page }) => (
                    <Route key={to} path={to} element={page} />
                  ))}
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;