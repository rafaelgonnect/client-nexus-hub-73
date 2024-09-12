import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Clientes = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gestão de Clientes</h1>
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <Input className="w-full sm:w-64" placeholder="Pesquisar clientes..." />
        <Button className="w-full sm:w-auto">Adicionar Cliente</Button>
      </div>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[300px] sm:h-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Nome</TableHead>
                  <TableHead className="hidden sm:table-cell">Email</TableHead>
                  <TableHead className="hidden sm:table-cell">Telefone</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">João Silva</TableCell>
                  <TableCell className="hidden sm:table-cell">joao@email.com</TableCell>
                  <TableCell className="hidden sm:table-cell">(11) 99999-9999</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                    <Button variant="destructive" size="sm">Excluir</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Maria Santos</TableCell>
                  <TableCell className="hidden sm:table-cell">maria@email.com</TableCell>
                  <TableCell className="hidden sm:table-cell">(11) 88888-8888</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                    <Button variant="destructive" size="sm">Excluir</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Carlos Oliveira</TableCell>
                  <TableCell className="hidden sm:table-cell">carlos@email.com</TableCell>
                  <TableCell className="hidden sm:table-cell">(11) 77777-7777</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                    <Button variant="destructive" size="sm">Excluir</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clientes;