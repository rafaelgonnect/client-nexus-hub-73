import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ModuleCard = ({ title, price, features, ctaText, ctaLink }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <p className="text-2xl font-bold text-blue-600">{price}</p>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <Button className="w-full" asChild>
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">{ctaText}</a>
      </Button>
    </CardContent>
  </Card>
);

const PayTheBil = () => {
  const modules = [
    {
      title: "Módulo: Emissão de Notas Fiscais",
      price: "A partir de R$ 29,90/mês",
      features: [
        "Apenas fale e o Bil emite suas notas",
        "Gestão fiscal simplificada",
        "Suporte especializado"
      ],
      ctaText: "Converse com o Bil",
      ctaLink: "https://wa.me/5511999999999?text=Gostaria%20de%20saber%20mais%20sobre%20o%20módulo%20de%20emissão%20de%20notas%20fiscais"
    },
    {
      title: "Módulo: Gestão de Clientes e Propostas",
      price: "A partir de R$ 26,90/mês",
      features: [
        "Cadastro e controle de clientes",
        "Envio de propostas e orçamentos",
        "Histórico detalhado de clientes"
      ],
      ctaText: "Converse com o Bil",
      ctaLink: "https://wa.me/5511999999999?text=Gostaria%20de%20saber%20mais%20sobre%20o%20módulo%20de%20gestão%20de%20clientes%20e%20propostas"
    },
    {
      title: "Módulo: Controle de Estoque",
      price: "A partir de R$ 9,90/mês",
      features: [
        "Gestão de entradas e saídas",
        "Relatórios de estoque em tempo real",
        "Alertas automáticos de reposição"
      ],
      ctaText: "Converse com o Bil",
      ctaLink: "https://wa.me/5511999999999?text=Gostaria%20de%20saber%20mais%20sobre%20o%20módulo%20de%20controle%20de%20estoque"
    },
    {
      title: "Módulo: Gestão de Documentos via Google Drive",
      price: "Apenas R$ 19,90/mês",
      features: [
        "Integração direta com o Google Drive",
        "Organização automática de documentos",
        "Busca inteligente por palavras-chave",
        "Compartilhamento seguro de arquivos"
      ],
      ctaText: "Converse com o Bil",
      ctaLink: "https://wa.me/5511999999999?text=Gostaria%20de%20saber%20mais%20sobre%20o%20módulo%20de%20gestão%20de%20documentos%20via%20Google%20Drive"
    },
    {
      title: "Módulo: Agendamentos Inteligentes",
      price: "A partir de R$ 15,90/mês",
      features: [
        "Agendamento automático de compromissos",
        "Lembretes personalizados",
        "Sincronização com múltiplos calendários",
        "Análise de produtividade e tempo"
      ],
      ctaText: "Converse com o Bil",
      ctaLink: "https://wa.me/5511999999999?text=Gostaria%20de%20saber%20mais%20sobre%20o%20módulo%20de%20agendamentos%20inteligentes"
    },
    {
      title: "Bil na Sua Empresa",
      price: "Consultoria Personalizada",
      features: [
        "Análise detalhada das necessidades de automação",
        "Planejamento estratégico de implementação",
        "Demonstração ao vivo das soluções do Bil",
        "Proposta sob medida para sua empresa"
      ],
      ctaText: "Agende uma Consultoria",
      ctaLink: "https://wa.me/5511999999999?text=Gostaria%20de%20agendar%20uma%20consultoria%20do%20Bil%20na%20minha%20empresa"
    },
    {
      title: "Bil sob medida",
      price: "Pague pelo que precisar!",
      features: [
        "Escolha os módulos de acordo com sua necessidade",
        "Combine funcionalidades e personalize sua solução",
        "Flexibilidade e economia no gerenciamento de seu negócio"
      ],
      ctaText: "Converse com o Bil",
      ctaLink: "https://wa.me/5511999999999?text=Gostaria%20de%20saber%20mais%20sobre%20o%20Bil%20sob%20medida"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pay the Bil (Módulos Personalizáveis)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>
    </div>
  );
};

export default PayTheBil;