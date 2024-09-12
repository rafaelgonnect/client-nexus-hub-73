import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ScrollArea } from "@/components/ui/scroll-area";

const data = [
  { name: 'Jan', receitas: 4000, despesas: 2400 },
  { name: 'Fev', receitas: 3000, despesas: 1398 },
  { name: 'Mar', receitas: 2000, despesas: 9800 },
  { name: 'Abr', receitas: 2780, despesas: 3908 },
  { name: 'Mai', receitas: 1890, despesas: 4800 },
  { name: 'Jun', receitas: 2390, despesas: 3800 },
];

const Financas = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gestão Financeira</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Receitas Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 15.060,00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Despesas Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 26.106,00</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Balanço Financeiro</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] sm:h-auto">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="receitas" stroke="#8884d8" />
                <Line type="monotone" dataKey="despesas" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Financas;