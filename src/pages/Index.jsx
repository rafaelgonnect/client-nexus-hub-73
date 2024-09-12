import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Dashboard CRM</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle>Clientes</CardTitle>
            <CardDescription className="text-blue-100">Gerenciar clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/clientes">
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-100">Acessar</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle>Estoque</CardTitle>
            <CardDescription className="text-green-100">Controle de estoque</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/estoque">
              <Button className="w-full bg-white text-green-600 hover:bg-green-100">Acessar</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardHeader>
            <CardTitle>Finanças</CardTitle>
            <CardDescription className="text-purple-100">Gestão financeira</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/financas">
              <Button className="w-full bg-white text-purple-600 hover:bg-purple-100">Acessar</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardHeader>
            <CardTitle>Configurações</CardTitle>
            <CardDescription className="text-orange-100">Configurar integrações</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/configuracoes">
              <Button className="w-full bg-white text-orange-600 hover:bg-orange-100">Acessar</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;