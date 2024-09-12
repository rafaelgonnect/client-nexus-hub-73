import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const Clientes = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gestão de Clientes</h1>
      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="Pesquisar clientes..." />
        <Button>Adicionar Cliente</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>João Silva</TableCell>
            <TableCell>joao@email.com</TableCell>
            <TableCell>(11) 99999-9999</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">Editar</Button>
              <Button variant="destructive" size="sm">Excluir</Button>
            </TableCell>
          </TableRow>
          {/* Adicione mais linhas conforme necessário */}
        </TableBody>
      </Table>
    </div>
  );
};

export default Clientes;