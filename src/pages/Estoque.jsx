import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Edit, Trash2 } from 'lucide-react';

const Estoque = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Controle de Estoque</h1>
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <Input className="w-full sm:w-64" placeholder="Pesquisar produtos..." />
        <Button className="w-full sm:w-auto">
          <Plus className="mr-2" size={16} /> Adicionar Produto
        </Button>
      </div>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Lista de Produtos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[300px] sm:h-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead className="hidden sm:table-cell">Quantidade</TableHead>
                  <TableHead className="hidden sm:table-cell">Preço</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Produto A</TableCell>
                  <TableCell className="hidden sm:table-cell">100</TableCell>
                  <TableCell className="hidden sm:table-cell">R$ 50,00</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">
                      <Edit size={14} className="mr-1" /> Editar
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 size={14} className="mr-1" /> Excluir
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Produto B</TableCell>
                  <TableCell className="hidden sm:table-cell">75</TableCell>
                  <TableCell className="hidden sm:table-cell">R$ 30,00</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">
                      <Edit size={14} className="mr-1" /> Editar
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 size={14} className="mr-1" /> Excluir
                    </Button>
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

export default Estoque;