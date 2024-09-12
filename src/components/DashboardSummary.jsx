import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DashboardSummary = () => {
  return (
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
  );
};

export default DashboardSummary;