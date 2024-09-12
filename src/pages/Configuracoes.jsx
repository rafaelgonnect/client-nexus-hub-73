import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Save, Upload } from 'lucide-react';

const Configuracoes = () => {
  const [certificateFile, setCertificateFile] = useState(null);

  const handleCertificateUpload = (event) => {
    const file = event.target.files[0];
    setCertificateFile(file);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Configurações</h1>
      <div className="grid gap-4 md:grid-cols-2">
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
              <Button>
                <Save className="mr-2" size={16} /> Salvar Configurações
              </Button>
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
              <Button>
                <Save className="mr-2" size={16} /> Atualizar Informações
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Notas Fiscais Eletrônicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input id="cnpj" placeholder="Digite o CNPJ da empresa" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="inscricaoEstadual">Inscrição Estadual</Label>
                <Input id="inscricaoEstadual" placeholder="Digite a Inscrição Estadual" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="certificadoDigital">Certificado Digital</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="certificadoDigital"
                    type="file"
                    className="hidden"
                    onChange={handleCertificateUpload}
                  />
                  <Button
                    onClick={() => document.getElementById('certificadoDigital').click()}
                    variant="outline"
                  >
                    <Upload className="mr-2" size={16} />
                    {certificateFile ? certificateFile.name : "Selecionar Arquivo"}
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="certificatePassword">Senha do Certificado</Label>
                <Input id="certificatePassword" type="password" placeholder="Digite a senha do certificado" />
              </div>
              <Button>
                <Save className="mr-2" size={16} /> Salvar Configurações Fiscais
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Configuracoes;