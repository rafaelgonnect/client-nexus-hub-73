import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const Estoque = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Controle de Estoque</h1>
      <div className="flex justify-between mb-4">
        <Input className="w-64" placeholder="Pesquisar produtos..." />
        <Button>Adicionar Produto</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Produto A</TableCell>
            <TableCell>100</TableCell>
            <TableCell>R$ 50,00</TableCell>
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

export default Estoque;