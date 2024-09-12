import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, Package, BarChart2, Settings, Workflow, DollarSign, ShoppingCart, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const clientData = [
  { month: 'Jan', newClients: 20 },
  { month: 'Feb', newClients: 15 },
  { month: 'Mar', newClients: 25 },
  { month: 'Apr', newClients: 22 },
  { month: 'May', newClients: 30 },
  { month: 'Jun', newClients: 28 },
];

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Dashboard CRM</h1>
      
      {/* Graphs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Receita Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Novos Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={clientData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="newClients" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card className="bg-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Produtos em Estoque</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5,678</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Receita Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">R$ 98,765</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Fluxos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Atividades Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Users className="mr-2" size={16} />
              <span>Novo cliente cadastrado: João Silva</span>
            </li>
            <li className="flex items-center">
              <Package className="mr-2" size={16} />
              <span>Estoque atualizado: +50 unidades do Produto A</span>
            </li>
            <li className="flex items-center">
              <DollarSign className="mr-2" size={16} />
              <span>Nova venda registrada: R$ 1,500</span>
            </li>
            <li className="flex items-center">
              <Workflow className="mr-2" size={16} />
              <span>Novo fluxo de automação criado: "Boas-vindas ao Cliente"</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Main Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center"><Users className="mr-2" size={20} /> Clientes</CardTitle>
            <CardDescription className="text-blue-100">Gerenciar clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Total de clientes: 1,234</p>
            <p className="mb-4">Novos este mês: 56</p>
            <Link to="/clientes">
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-100">
                <Users className="mr-2" size={16} /> Acessar
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center"><Package className="mr-2" size={20} /> Estoque</CardTitle>
            <CardDescription className="text-green-100">Controle de estoque</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Produtos em estoque: 5,678</p>
            <p className="mb-4">Produtos com baixo estoque: 23</p>
            <Link to="/estoque">
              <Button className="w-full bg-white text-green-600 hover:bg-green-100">
                <Package className="mr-2" size={16} /> Acessar
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center"><BarChart2 className="mr-2" size={20} /> Finanças</CardTitle>
            <CardDescription className="text-purple-100">Gestão financeira</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Receita mensal: R$ 98,765</p>
            <p className="mb-4">Despesas mensais: R$ 45,678</p>
            <Link to="/financas">
              <Button className="w-full bg-white text-purple-600 hover:bg-purple-100">
                <BarChart2 className="mr-2" size={16} /> Acessar
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center"><Workflow className="mr-2" size={20} /> Automação</CardTitle>
            <CardDescription className="text-yellow-100">Criar fluxos de trabalho</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Fluxos ativos: 12</p>
            <p className="mb-4">Ações automatizadas este mês: 1,234</p>
            <Link to="/automacao">
              <Button className="w-full bg-white text-yellow-600 hover:bg-yellow-100">
                <Workflow className="mr-2" size={16} /> Acessar
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center"><Settings className="mr-2" size={20} /> Configurações</CardTitle>
            <CardDescription className="text-orange-100">Configurar integrações</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Integrações ativas: 5</p>
            <p className="mb-4">Última atualização: 2 dias atrás</p>
            <Link to="/configuracoes">
              <Button className="w-full bg-white text-orange-600 hover:bg-orange-100">
                <Settings className="mr-2" size={16} /> Acessar
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center"><AlertCircle className="mr-2" size={20} /> Alertas</CardTitle>
            <CardDescription className="text-red-100">Notificações importantes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Alertas não lidos: 3</p>
            <p className="mb-4">Prioridade alta: 1</p>
            <Button className="w-full bg-white text-red-600 hover:bg-red-100">
              <AlertCircle className="mr-2" size={16} /> Ver Alertas
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;