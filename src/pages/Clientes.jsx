import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Clientes = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gestão de Clientes</h1>
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <Input className="w-full sm:w-64" placeholder="Pesquisar clientes..." />
        <Button className="w-full sm:w-auto">Adicionar Cliente</Button>
      </div>
      <Card className="overflow-x-auto">
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Nome</TableHead>
                <TableHead className="w-[200px]">Email</TableHead>
                <TableHead className="w-[150px]">Telefone</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">João Silva</TableCell>
                <TableCell>joao@email.com</TableCell>
                <TableCell>(11) 99999-9999</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                  <Button variant="destructive" size="sm">Excluir</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Maria Santos</TableCell>
                <TableCell>maria@email.com</TableCell>
                <TableCell>(11) 88888-8888</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                  <Button variant="destructive" size="sm">Excluir</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Carlos Oliveira</TableCell>
                <TableCell>carlos@email.com</TableCell>
                <TableCell>(11) 77777-7777</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                  <Button variant="destructive" size="sm">Excluir</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clientes;