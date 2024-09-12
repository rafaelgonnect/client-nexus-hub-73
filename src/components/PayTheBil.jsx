import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const services = [
  { id: 'basic', name: 'Plano Básico', price: 'R$ 97/mês', description: 'Ideal para MEIs e autônomos' },
  { id: 'standard', name: 'Plano Padrão', price: 'R$ 197/mês', description: 'Perfeito para pequenas empresas' },
  { id: 'premium', name: 'Plano Premium', price: 'R$ 297/mês', description: 'Completo para empresas em crescimento' },
];

const PayTheBil = () => {
  const [selectedService, setSelectedService] = useState('basic');

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Pay the Bil - Escolha seu Plano</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedService} onValueChange={setSelectedService}>
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value={service.id} id={service.id} />
              <Label htmlFor={service.id} className="flex-1">
                <span className="font-bold">{service.name}</span>
                <span className="block text-sm text-gray-500">{service.description}</span>
                <span className="block font-semibold text-blue-600">{service.price}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
        <Button className="w-full mt-4">Contratar Serviço</Button>
      </CardContent>
    </Card>
  );
};

export default PayTheBil;