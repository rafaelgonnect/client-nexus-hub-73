import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, Package, BarChart2, Settings, Workflow, AlertCircle } from 'lucide-react';
import DashboardGraphs from '../components/DashboardGraphs';
import DashboardSummary from '../components/DashboardSummary';
import PayTheBil from '../components/PayTheBil';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Dashboard CRM</h1>
      
      <DashboardGraphs />
      <DashboardSummary />
      <PayTheBil />

      {/* Main Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModuleCard
          title="Clientes"
          icon={<Users className="mr-2" size={20} />}
          description="Gerenciar clientes"
          stats={['Total de clientes: 1,234', 'Novos este mês: 56']}
          link="/clientes"
          color="blue"
        />
        <ModuleCard
          title="Estoque"
          icon={<Package className="mr-2" size={20} />}
          description="Controle de estoque"
          stats={['Produtos em estoque: 5,678', 'Produtos com baixo estoque: 23']}
          link="/estoque"
          color="green"
        />
        <ModuleCard
          title="Finanças"
          icon={<BarChart2 className="mr-2" size={20} />}
          description="Gestão financeira"
          stats={['Receita mensal: R$ 98,765', 'Despesas mensais: R$ 45,678']}
          link="/financas"
          color="purple"
        />
        <ModuleCard
          title="Automação"
          icon={<Workflow className="mr-2" size={20} />}
          description="Criar fluxos de trabalho"
          stats={['Fluxos ativos: 12', 'Ações automatizadas este mês: 1,234']}
          link="/automacao"
          color="yellow"
        />
        <ModuleCard
          title="Configurações"
          icon={<Settings className="mr-2" size={20} />}
          description="Configurar integrações"
          stats={['Integrações ativas: 5', 'Última atualização: 2 dias atrás']}
          link="/configuracoes"
          color="orange"
        />
        <ModuleCard
          title="Alertas"
          icon={<AlertCircle className="mr-2" size={20} />}
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
  <Card className={`bg-gradient-to-br from-${color}-500 to-${color}-600 text-white`}>
    <CardHeader>
      <CardTitle className="flex items-center">{icon} {title}</CardTitle>
      <CardDescription className={`text-${color}-100`}>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {stats.map((stat, index) => (
        <p key={index} className="mb-4">{stat}</p>
      ))}
      <Link to={link}>
        <Button className={`w-full bg-white text-${color}-600 hover:bg-${color}-100`}>
          {icon} {buttonText}
        </Button>
      </Link>
    </CardContent>
  </Card>
);

export default Index;