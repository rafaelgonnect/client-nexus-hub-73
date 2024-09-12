import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Upload, Plus, X } from 'lucide-react';

const initialItems = [
  { id: 'item1', content: 'Enviar e-mail' },
  { id: 'item2', content: 'Atualizar CRM' },
  { id: 'item3', content: 'Gerar relatório' },
];

const Automacao = () => {
  const [items, setItems] = useState(initialItems);
  const [workflow, setWorkflow] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    
    setItems(newItems);
  };

  const addToWorkflow = (item) => {
    setWorkflow([...workflow, { ...item, id: `workflow-${Date.now()}` }]);
  };

  const removeFromWorkflow = (id) => {
    setWorkflow(workflow.filter(item => item.id !== id));
  };

  const generateJSON = () => {
    const json = JSON.stringify(workflow, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'workflow.json';
    a.click();
  };

  const importJSON = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedWorkflow = JSON.parse(e.target.result);
          setWorkflow(importedWorkflow);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          alert('Erro ao importar o arquivo JSON. Por favor, verifique o formato.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Automação de Fluxos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Itens Disponíveis</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="items">
                  {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                      {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-white p-2 mb-2 rounded shadow"
                            >
                              {item.content}
                              <Button
                                size="sm"
                                variant="ghost"
                                className="ml-2"
                                onClick={() => addToWorkflow(item)}
                              >
                                <Plus size={16} />
                              </Button>
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fluxo de Trabalho</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <ul>
                {workflow.map((item) => (
                  <li key={item.id} className="bg-white p-2 mb-2 rounded shadow flex justify-between items-center">
                    {item.content}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromWorkflow(item.id)}
                    >
                      <X size={16} />
                    </Button>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button onClick={generateJSON}>
          <Download className="mr-2" size={16} /> Exportar JSON
        </Button>
        <div>
          <Input
            type="file"
            accept=".json"
            onChange={importJSON}
            className="hidden"
            id="import-json"
          />
          <label htmlFor="import-json">
            <Button as="span">
              <Upload className="mr-2" size={16} /> Importar JSON
            </Button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Automacao;