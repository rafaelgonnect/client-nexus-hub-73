import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, Package, BarChart2, Settings, Workflow, AlertCircle } from 'lucide-react';
import DashboardGraphs from '../components/DashboardGraphs';
import DashboardSummary from '../components/DashboardSummary';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Dashboard CRM</h1>
      
      <DashboardGraphs />
      <DashboardSummary />

      {/* Main Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <ModuleCard
          title="Clientes"
          icon={<Users className="h-6 w-6" />}
          description="Gerenciar clientes"
          stats={['Total de clientes: 1,234', 'Novos este mês: 56']}
          link="/clientes"
          color="blue"
        />
        <ModuleCard
          title="Estoque"
          icon={<Package className="h-6 w-6" />}
          description="Controle de estoque"
          stats={['Produtos em estoque: 5,678', 'Produtos com baixo estoque: 23']}
          link="/estoque"
          color="green"
        />
        <ModuleCard
          title="Finanças"
          icon={<BarChart2 className="h-6 w-6" />}
          description="Gestão financeira"
          stats={['Receita mensal: R$ 98,765', 'Despesas mensais: R$ 45,678']}
          link="/financas"
          color="purple"
        />
        <ModuleCard
          title="Automação"
          icon={<Workflow className="h-6 w-6" />}
          description="Criar fluxos de trabalho"
          stats={['Fluxos ativos: 12', 'Ações automatizadas este mês: 1,234']}
          link="/automacao"
          color="yellow"
        />
        <ModuleCard
          title="Configurações"
          icon={<Settings className="h-6 w-6" />}
          description="Configurar integrações"
          stats={['Integrações ativas: 5', 'Última atualização: 2 dias atrás']}
          link="/configuracoes"
          color="orange"
        />
        <ModuleCard
          title="Alertas"
          icon={<AlertCircle className="h-6 w-6" />}
          description="Notificações importantes"
          stats={['Alertas não lidos: 3', 'Prioridade alta: 1']}
          link="#"
          color="red"
          buttonText="Ver Alertas"
        />
      </div>
    </div>
  );
};

const ModuleCard = ({ title, icon, description, stats, link, color, buttonText = "Acessar" }) => (
  <Card className={`bg-white shadow-md hover:shadow-lg transition-shadow`}>
    <CardHeader>
      <CardTitle className="flex items-center text-lg font-semibold text-gray-800">
        <span className={`mr-2 text-${color}-500`}>{icon}</span>
        {title}
      </CardTitle>
      <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {stats.map((stat, index) => (
        <p key={index} className="text-sm text-gray-700 mb-1">{stat}</p>
      ))}
      <Link to={link} className="mt-4 inline-block w-full">
        <Button className={`w-full bg-${color}-500 hover:bg-${color}-600 text-white`}>
          {buttonText}
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default Index;