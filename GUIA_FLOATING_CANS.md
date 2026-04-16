# 🥫 Guia: Animação de Latas Voando (FloatingCans)

Este guia explica como a animação de latas voando foi criada e como você pode modificá-la.

---

## 📋 O que é FloatingCans?

É um componente que cria um efeito visual similar ao vídeo do Spylt, onde:
- **4 latas voam pela tela** de diferentes direções
- **Rotacionam em 3D** enquanto se movem
- **Flutuam continuamente** com efeito de ondulação
- **Uma frase aparece embaixo** com a descrição

---

## 🎬 Como Funciona

### Estrutura do Componente

```tsx
export default function FloatingCans() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cansRef = useRef<HTMLDivElement[]>([]);
  const phraseRef = useRef<HTMLDivElement>(null);

  // Array com dados das latas
  const cans = [
    { id: 1, flavor: 'Chocolate', color: 'from-amber-900 to-amber-700' },
    { id: 2, flavor: 'Morango', color: 'from-pink-500 to-pink-400' },
    // ...
  ];

  useEffect(() => {
    // Animações GSAP aqui
  }, []);

  return (
    // JSX com latas e frase
  );
}
```

### Animações Principais

#### 1. Trajetória das Latas

Cada lata tem uma trajetória diferente definida em um array:

```tsx
const trajectories = [
  // Lata 1: Vem de cima-esquerda
  {
    startX: -200,      // Posição inicial X
    startY: -300,      // Posição inicial Y
    endX: 100,         // Posição final X (volta para 0)
    endY: 200,         // Posição final Y (volta para 0)
    rotation: 720,     // Rotação total (2 voltas)
  },
  // Lata 2: Vem de cima-direita
  {
    startX: 300,
    startY: -250,
    endX: -80,
    endY: 150,
    rotation: -720,    // Rotação negativa (contrário)
  },
  // ...
];
```

#### 2. Animação Principal com GSAP

```tsx
// Timeline sincronizada com scroll
const mainTl = gsap.timeline({
  scrollTrigger: {
    trigger: containerRef.current,
    start: 'top center',
    end: 'bottom center',
    scrub: 1,  // Sincroniza com scroll
  },
});

// Animar cada lata
cansRef.current.forEach((can, index) => {
  const trajectory = trajectories[index];

  mainTl.from(
    can,
    {
      x: trajectory.startX,
      y: trajectory.startY,
      opacity: 0,
      scale: 0.3,
      rotationX: 180,
      rotationY: 180,
      rotationZ: trajectory.rotation,
      duration: 2,
      ease: 'power2.inOut',
    },
    index * 0.3  // Delay entre cada lata
  );
});
```

#### 3. Rotação Contínua

```tsx
// Rotação infinita enquanto está visível
gsap.to(can, {
  rotationX: 360,
  rotationY: 360,
  duration: 3,
  repeat: -1,        // Repetir infinitamente
  ease: 'none',      // Velocidade constante
});
```

#### 4. Flutuação Suave

```tsx
// Movimento suave para cima e para baixo
gsap.to(can, {
  y: '+=20',         // Move 20px para cima
  duration: 2,
  repeat: -1,        // Repetir infinitamente
  yoyo: true,        // Volta para posição original
  ease: 'sine.inOut',
});
```

---

## 🎨 Personalizando as Latas

### Mudar Cores

No array `cans`, mude a propriedade `color`:

```tsx
const cans = [
  {
    id: 1,
    flavor: 'Chocolate',
    color: 'from-blue-900 to-blue-700',  // Mude aqui
  },
  // ...
];
```

**Classes Tailwind disponíveis**:
```
from-red-900 to-red-700
from-green-900 to-green-700
from-blue-900 to-blue-700
from-purple-900 to-purple-700
from-pink-500 to-pink-400
```

### Mudar Quantidade de Latas

Adicione mais objetos ao array `cans` e mais trajetórias em `trajectories`:

```tsx
const cans = [
  // ... latas existentes
  {
    id: 5,
    flavor: 'Novo Sabor',
    color: 'from-indigo-900 to-indigo-700',
  },
];

const trajectories = [
  // ... trajetórias existentes
  // Lata 5: Nova trajetória
  {
    startX: -100,
    startY: 300,
    endX: 200,
    endY: -200,
    rotation: 900,
  },
];
```

### Mudar Velocidade de Animação

```tsx
// Na trajetória
mainTl.from(
  can,
  {
    // ... outras propriedades
    duration: 3,  // Mude de 2 para 3 (mais lento)
    ease: 'power2.inOut',
  },
  index * 0.5  // Mude delay (0.3 para 0.5 = mais espaçado)
);

// Rotação contínua
gsap.to(can, {
  rotationX: 360,
  rotationY: 360,
  duration: 5,  // Mude de 3 para 5 (mais lento)
  repeat: -1,
  ease: 'none',
});
```

### Mudar Frase Embaixo

```tsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
  Sua nova frase aqui
</h2>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
  Descrição embaixo
</p>
```

---

## 🔧 Modificações Avançadas

### Mudar Direção das Latas

```tsx
// Trajetória original (cima-esquerda)
{
  startX: -200,
  startY: -300,
  endX: 100,
  endY: 200,
  rotation: 720,
}

// Trajetória modificada (cima-direita)
{
  startX: 200,   // Positivo = direita
  startY: -300,  // Negativo = cima
  endX: -100,
  endY: 200,
  rotation: -720,  // Negativo = rotação contrária
}
```

### Adicionar Efeito de Parallax

```tsx
// Dentro do useEffect, após as animações
gsap.to(containerRef.current, {
  scrollTrigger: {
    trigger: containerRef.current,
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  },
  backgroundPosition: '0% 50%',
  ease: 'none',
});
```

### Sincronizar com Scroll (Scrub)

```tsx
// Scrub = 0: Sem suavização (segue scroll exatamente)
scrollTrigger: {
  scrub: 0,
}

// Scrub = 1: 1 segundo de suavização
scrollTrigger: {
  scrub: 1,
}

// Scrub = true: Suavização automática
scrollTrigger: {
  scrub: true,
}
```

---

## 📊 Propriedades GSAP Usadas

| Propriedade | O que faz | Exemplo |
|-------------|----------|---------|
| `x` | Move horizontalmente | `x: 100` |
| `y` | Move verticalmente | `y: -300` |
| `opacity` | Transparência | `opacity: 0.5` |
| `scale` | Tamanho | `scale: 0.3` |
| `rotationX` | Rotação eixo X | `rotationX: 180` |
| `rotationY` | Rotação eixo Y | `rotationY: 180` |
| `rotationZ` | Rotação eixo Z | `rotationZ: 720` |
| `duration` | Duração em segundos | `duration: 2` |
| `ease` | Tipo de movimento | `ease: 'power2.inOut'` |
| `repeat` | Quantas vezes repetir | `repeat: -1` (infinito) |
| `yoyo` | Volta para posição original | `yoyo: true` |

---

## 🎯 Casos de Uso

### Caso 1: Latas mais rápidas

```tsx
// Reduza duration e aumente repeat
mainTl.from(can, {
  // ...
  duration: 1,  // Era 2
  // ...
}, index * 0.2);  // Era 0.3

gsap.to(can, {
  rotationX: 360,
  rotationY: 360,
  duration: 1.5,  // Era 3
  repeat: -1,
  ease: 'none',
});
```

### Caso 2: Latas que saem da tela

```tsx
const trajectories = [
  {
    startX: -200,
    startY: -300,
    endX: 400,    // Sai para direita
    endY: 400,    // Sai para baixo
    rotation: 720,
  },
  // ...
];
```

### Caso 3: Apenas 2 latas

```tsx
const cans = [
  { id: 1, flavor: 'Chocolate', color: 'from-amber-900 to-amber-700' },
  { id: 2, flavor: 'Morango', color: 'from-pink-500 to-pink-400' },
];

const trajectories = [
  { startX: -200, startY: -300, endX: 100, endY: 200, rotation: 720 },
  { startX: 300, startY: -250, endX: -80, endY: 150, rotation: -720 },
];
```

---

## 🐛 Troubleshooting

### Latas não aparecem

Verifique se:
1. `cansRef.current[index]` está sendo atribuído corretamente
2. O container tem `perspective: '1200px'`
3. As latas têm `transformStyle: 'preserve-3d'`

### Animação não sincroniza com scroll

Verifique:
1. `ScrollTrigger` está registrado: `gsap.registerPlugin(ScrollTrigger)`
2. `scrub: 1` está configurado
3. A seção tem altura suficiente

### Frase não aparece

Verifique:
1. `phraseRef` está atribuído ao elemento
2. `opacity: 0` no estado inicial
3. A animação está na timeline: `mainTl.from(phraseRef.current, ...)`

---

## 💡 Dicas

1. **Use DevTools para debug**: Abra F12 e veja as transformações em tempo real
2. **Teste com `markers: true`**: Mostra linhas de debug do ScrollTrigger
3. **Ajuste `perspective`**: Valores maiores = efeito 3D menos pronunciado
4. **Use `ease: 'none'` para rotação**: Mantém velocidade constante
5. **Combine com `yoyo: true`**: Cria efeito de flutuação natural

---

## 📚 Próximas Melhorias

- [ ] Adicionar som ao passar pelas latas
- [ ] Fazer latas clicáveis para abrir detalhes
- [ ] Adicionar partículas ao redor das latas
- [ ] Criar efeito de "colisão" entre latas
- [ ] Animar fundo com gradiente dinâmico

---

**Divirta-se personalizando as latas!** 🚀
