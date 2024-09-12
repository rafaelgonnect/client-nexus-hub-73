import { HomeIcon, UsersIcon, PackageIcon, BarChartIcon, SettingsIcon, Workflow, DollarSign } from "lucide-react";
import Index from "./pages/Index.jsx";
import Clientes from "./pages/Clientes.jsx";
import Estoque from "./pages/Estoque.jsx";
import Financas from "./pages/Financas.jsx";
import Configuracoes from "./pages/Configuracoes.jsx";
import Automacao from "./pages/Automacao.jsx";
import PayTheBil from "./pages/PayTheBil.jsx";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeIcon className="h-5 w-5" />,
    page: <Index />,
  },
  {
    title: "Clientes",
    to: "/clientes",
    icon: <UsersIcon className="h-5 w-5" />,
    page: <Clientes />,
  },
  {
    title: "Estoque",
    to: "/estoque",
    icon: <PackageIcon className="h-5 w-5" />,
    page: <Estoque />,
  },
  {
    title: "Finanças",
    to: "/financas",
    icon: <BarChartIcon className="h-5 w-5" />,
    page: <Financas />,
  },
  {
    title: "Automação",
    to: "/automacao",
    icon: <Workflow className="h-5 w-5" />,
    page: <Automacao />,
  },
  {
    title: "Pay the Bil",
    to: "/pay-the-bil",
    icon: <DollarSign className="h-5 w-5" />,
    page: <PayTheBil />,
  },
  {
    title: "Configurações",
    to: "/configuracoes",
    icon: <SettingsIcon className="h-5 w-5" />,
    page: <Configuracoes />,
  },
];