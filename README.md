## Projeto gerenciamento de memoria

### Descrição do projeto

### Requisitos para iniciar o projeto

- [Node Js](https://nodejs.org/en)
- [Artillery](https://www.artillery.io/docs/get-started/get-artillery)

### Iniciando o projeto

```bash
npm start
# Em outro terminal inicie os testes
artillery quick --count 10 -n 20 http://localhost:3000
```

### Retorno do middleware de monitoramento de memoria

Retorna: <Object>
rss <inteiro>
heapTotal <inteiro>
heapUsed <inteiro>
external <inteiro>
arrayBuffers <inteiro>
Retorna um objeto que descreve o uso de memória do processo Node.js medido em bytes.

```javascript
const { memoryUsage } = require("node:process");

console.log(memoryUsage());
// Prints:
// {
// rss: 4935680,
// heapTotal: 1826816,
// heapUsed: 650472,
// external: 49879,
// arrayBuffers: 9386
// }
```

- heapTotal e heapUsed referem-se ao uso de memória do V8.
- externalrefere-se ao uso de memória de objetos C++ vinculados a JavaScript objetos gerenciados pelo V8.
- rss, Resident Set Size, é a quantidade de espaço ocupado no principal dispositivo de memória (que é um subconjunto da memória total alocada) para o processo, incluindo todos os objetos e códigos C++ e JavaScript.
- arrayBuffers refere-se à memória alocada para ArrayBuffers e SharedArrayBuffers, incluindo todos os Node.js Buffers. Isso também está incluído no valor external. Quando Node.js é usado como um biblioteca incorporada, esse valor pode ser 0 porque as alocações para ArrayBuffers pode não ser rastreado nesse caso.
  Ao usar Worker threads, rss será um valor válido para o todo o processo, enquanto os outros campos se referirão apenas ao thread atual.

- O process.memoryUsage() método itera em cada página para coletar informações sobre o uso de memória que pode ser lento dependendo do alocações de memória do programa.

### Retorno do middleware de Log

#### As informações sobre o uso de memória e CPU são valiosas para otimizar o desempenho do seu aplicativo

#### Identificar Vazamentos de Memória:

Compare o uso de memória antes e depois de operações críticas.
Se houver um aumento significativo que não é liberado após a operação, pode indicar um possível vazamento de memória.

#### Otimizar Operações Intensivas em Memória:

Analise o "Uso de memória durante a operação" para operações específicas.
Identifique se há maneiras de otimizar o código para reduzir a alocação de memória.

#### Monitoramento Contínuo:

Use essas informações como parte de um monitoramento contínuo para detectar padrões ou problemas de desempenho ao longo do tempo.

#### Perfil da CPU:

O "CPU Usage (%)" pode ajudar a identificar quais partes do seu código estão consumindo mais recursos de CPU.
Perfis de CPU podem ser usados para identificar gargalos e otimizar essas áreas.

#### Ajuste de Configurações:

Com base nas informações sobre o uso de recursos, você pode ajustar configurações, como o número de processos em execução simultânea, alocar mais recursos para tarefas específicas, etc.

#### Limpeza de Recursos:

Certifique-se de liberar recursos (como conexões de banco de dados, manipuladores de arquivos) após o uso. O monitoramento de memória pode ajudar a identificar se os recursos estão sendo liberados corretamente.

#### Implementação de Caching:

Considere implementar caching para evitar processamento repetitivo de dados que não mudam com frequência, reduzindo assim a carga na CPU.
