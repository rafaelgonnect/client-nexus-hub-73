import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Configuracoes = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Configurações</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Integração com API Externa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="apiKey">Chave da API</Label>
              <Input id="apiKey" placeholder="Digite a chave da API" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="apiUrl">URL da API</Label>
              <Input id="apiUrl" placeholder="https://api.exemplo.com" />
            </div>
            <Button>Salvar Configurações</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Configurações Gerais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="companyName">Nome da Empresa</Label>
              <Input id="companyName" placeholder="Digite o nome da sua empresa" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail de Contato</Label>
              <Input id="email" type="email" placeholder="contato@suaempresa.com" />
            </div>
            <Button>Atualizar Informações</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Configuracoes;