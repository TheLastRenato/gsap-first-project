# 📚 Guia Completo: CSS Puro → GSAP Básico → GSAP Avançado

Este guia te levará de iniciante a expert em animações web, começando com CSS puro e evoluindo até técnicas avançadas com GSAP.

---

## 📋 Índice

1. [Nível 1: CSS Puro](#nível-1-css-puro)
2. [Nível 2: GSAP Básico](#nível-2-gsap-básico)
3. [Nível 3: GSAP Intermediário](#nível-3-gsap-intermediário)
4. [Nível 4: GSAP Avançado](#nível-4-gsap-avançado)
5. [Exemplos Práticos do Projeto](#exemplos-práticos-do-projeto)
6. [Performance e Otimização](#performance-e-otimização)

---

## Nível 1: CSS Puro

### O que você vai aprender
- `@keyframes` - Definir animações
- `animation` - Aplicar animações
- `transition` - Transições suaves
- `transform` - Transformações 2D/3D

### 1.1 - Keyframes Básicos

```css
/* Definir uma animação */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Aplicar a animação */
.elemento {
  animation: fadeIn 1s ease-in-out;
}
```

**Sintaxe completa**:
```css
animation: 
  name         /* Nome da animação */
  duration     /* Duração (ex: 1s) */
  timing-function /* Easing (ease, linear, ease-in-out) */
  delay        /* Delay inicial */
  iteration-count /* Quantas vezes (1, 2, infinite) */
  direction    /* normal, reverse, alternate */
  fill-mode    /* forwards, backwards, both */
  play-state   /* running, paused */
;
```

### 1.2 - Transforms (Transformações)

```css
/* Translação (movimento) */
transform: translateX(100px);    /* Move 100px para direita */
transform: translateY(-50px);    /* Move 50px para cima */
transform: translate(100px, 50px); /* Move X e Y */

/* Escala */
transform: scale(1.5);           /* Aumenta 50% */
transform: scaleX(2);            /* Aumenta apenas largura */
transform: scaleY(0.5);          /* Reduz apenas altura */

/* Rotação */
transform: rotate(45deg);        /* Rotaciona 45 graus */
transform: rotateX(45deg);       /* Rotação 3D no eixo X */
transform: rotateY(45deg);       /* Rotação 3D no eixo Y */
transform: rotateZ(45deg);       /* Rotação 3D no eixo Z */

/* Skew (inclinação) */
transform: skewX(10deg);         /* Inclina no eixo X */
transform: skewY(10deg);         /* Inclina no eixo Y */

/* Combinações */
transform: translate(50px, 50px) rotate(45deg) scale(1.2);
```

### 1.3 - Transitions (Transições)

```css
/* Transição simples */
.botao {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: red;
}

/* Transição múltipla */
.card {
  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease,
    opacity 0.2s ease;
}

/* Transição de tudo */
.elemento {
  transition: all 0.5s ease-in-out;
}
```

### 1.4 - Exemplo Prático: Fade In + Slide

```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.titulo {
  animation: slideInUp 0.8s ease-out;
}
```

### ✅ Quando usar CSS puro
- Animações simples e diretas
- Hover effects
- Transições de propriedades
- Animações que rodam continuamente

### ❌ Quando NÃO usar CSS puro
- Animações sincronizadas com scroll
- Múltiplas animações em sequência
- Animações baseadas em interações complexas
- Animações 3D sofisticadas

---

## Nível 2: GSAP Básico

### O que você vai aprender
- Instalar GSAP
- `gsap.to()` - Animar PARA um valor
- `gsap.from()` - Animar DE um valor
- `gsap.fromTo()` - Controlar início e fim
- Timelines - Sequências de animações

### 2.1 - Instalação

```bash
npm install gsap
# ou
pnpm add gsap
```

### 2.2 - Primeiro Exemplo

```tsx
import gsap from 'gsap';

// Animar elemento PARA valores
gsap.to('.box', {
  duration: 1,
  x: 100,           // Mover 100px para direita
  opacity: 0.5,     // Reduzir opacidade
  backgroundColor: 'red',
  ease: 'power2.out'
});
```

### 2.3 - Diferença: to() vs from() vs fromTo()

```tsx
// gsap.to() - Anima PARA os valores
gsap.to('.box', {
  duration: 1,
  x: 100,  // Vai de 0 para 100
});

// gsap.from() - Anima DE os valores
gsap.from('.box', {
  duration: 1,
  x: 100,  // Começa em 100, vai para 0
});

// gsap.fromTo() - Controla início E fim
gsap.fromTo(
  '.box',
  { x: 0, opacity: 0 },      // Estado inicial
  { x: 100, opacity: 1, duration: 1 }  // Estado final
);
```

### 2.4 - Easing Functions

```tsx
// Linear - velocidade constante
gsap.to('.box', { x: 100, duration: 1, ease: 'linear' });

// Power - acelera e desacelera
gsap.to('.box', { x: 100, duration: 1, ease: 'power1.out' });
gsap.to('.box', { x: 100, duration: 1, ease: 'power2.inOut' });
gsap.to('.box', { x: 100, duration: 1, ease: 'power4.out' });

// Back - efeito de "volta"
gsap.to('.box', { x: 100, duration: 1, ease: 'back.out(1.7)' });

// Elastic - efeito de mola
gsap.to('.box', { x: 100, duration: 1, ease: 'elastic.out(1, 0.5)' });

// Bounce - efeito de quique
gsap.to('.box', { x: 100, duration: 1, ease: 'bounce.out' });
```

### 2.5 - Timelines (Sequências)

```tsx
// Criar timeline
const tl = gsap.timeline();

// Adicionar animações em sequência
tl.to('.box1', { x: 100, duration: 1 })
  .to('.box2', { x: 100, duration: 1 })  // Começa quando box1 termina
  .to('.box3', { x: 100, duration: 1 });

// Adicionar com delay relativo
tl.to('.box1', { x: 100, duration: 1 })
  .to('.box2', { x: 100, duration: 1 }, '-=0.5')  // Começa 0.5s antes de terminar
  .to('.box3', { x: 100, duration: 1 }, 0);  // Começa no tempo 0 (simultâneo)

// Adicionar com label
tl.to('.box1', { x: 100, duration: 1 }, 'start')
  .to('.box2', { x: 100, duration: 1 }, 'start')  // Mesmo tempo que box1
  .to('.box3', { x: 100, duration: 1 }, 'start+=0.5');  // 0.5s depois
```

### 2.6 - Exemplo em React

```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MyComponent() {
  const boxRef = useRef(null);

  useEffect(() => {
    // Animar quando componente monta
    gsap.to(boxRef.current, {
      x: 100,
      duration: 1,
      ease: 'power2.out'
    });
  }, []);

  return <div ref={boxRef} className="w-20 h-20 bg-blue-500" />;
}
```

### ✅ Quando usar GSAP Básico
- Animações simples que precisam de controle preciso
- Sequências de animações
- Animações com easing customizado

---

## Nível 3: GSAP Intermediário

### O que você vai aprender
- ScrollTrigger - Animar com scroll
- Stagger - Animar múltiplos elementos
- Callbacks - Executar código durante animação
- Controlar animações (play, pause, reverse)

### 3.1 - ScrollTrigger

```tsx
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animar quando elemento entra na viewport
gsap.to('.box', {
  scrollTrigger: {
    trigger: '.box',           // Elemento que dispara
    start: 'top center',       // Quando dispara (top do elemento = center da viewport)
    end: 'bottom center',      // Quando termina
    markers: true,             // Debug (mostra linhas)
    scrub: 1,                  // Sincroniza com scroll (1 = 1 segundo de suavização)
  },
  x: 100,
  duration: 1,
});
```

**Valores de `start` e `end`**:
```
'top top'      - Topo do elemento = topo da viewport
'top center'   - Topo do elemento = centro da viewport
'top bottom'   - Topo do elemento = fundo da viewport
'center center' - Centro do elemento = centro da viewport
'bottom center' - Fundo do elemento = centro da viewport

Pode adicionar offset: 'top center+=100' (100px abaixo do centro)
```

### 3.2 - Stagger (Animar múltiplos elementos)

```tsx
// Animar cada elemento com delay
gsap.to('.box', {
  x: 100,
  duration: 1,
  stagger: 0.2,  // 0.2s de delay entre cada elemento
});

// Stagger com mais opções
gsap.to('.box', {
  x: 100,
  duration: 1,
  stagger: {
    amount: 1,        // Tempo total de stagger
    from: 'center',   // De onde começa (start, center, end, random)
    ease: 'power2.inOut'
  }
});
```

### 3.3 - Callbacks (Executar código)

```tsx
gsap.to('.box', {
  x: 100,
  duration: 1,
  onStart: () => console.log('Começou!'),
  onUpdate: () => console.log('Atualizando...'),
  onComplete: () => console.log('Terminou!'),
  onRepeat: () => console.log('Repetiu!'),
});
```

### 3.4 - Controlar Animações

```tsx
const animation = gsap.to('.box', {
  x: 100,
  duration: 1,
  paused: true  // Começa pausado
});

// Controlar
animation.play();      // Começar
animation.pause();     // Pausar
animation.resume();    // Retomar
animation.reverse();   // Inverter
animation.seek(0.5);   // Ir para 50% da animação
animation.progress(0.5); // Definir progresso
```

### 3.5 - Exemplo Prático: Scroll Reveal

```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center+=100',
        once: true,  // Animar apenas uma vez
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return <div ref={ref}>Conteúdo que aparece ao scroll</div>;
}
```

---

## Nível 4: GSAP Avançado

### O que você vai aprender
- Morphing SVG
- 3D Transforms
- Animações baseadas em mouse
- Context (para cleanup)
- Performance optimization

### 4.1 - 3D Transforms

```tsx
gsap.to('.box', {
  rotationX: 360,      // Rotação no eixo X
  rotationY: 360,      // Rotação no eixo Y
  rotationZ: 360,      // Rotação no eixo Z
  z: 100,              // Profundidade
  duration: 2,
  transformOrigin: '50% 50%',  // Ponto de rotação
});
```

### 4.2 - Animações Baseadas em Mouse

```tsx
import gsap from 'gsap';

export default function MouseFollow() {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(boxRef.current, {
        x: x - 25,  // Centralizar
        y: y - 25,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={boxRef} className="w-12 h-12 bg-blue-500 rounded-full" />;
}
```

### 4.3 - Morphing SVG

```tsx
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

gsap.to('#shape1', {
  morphSVG: '#shape2',  // Transforma de shape1 para shape2
  duration: 1,
  ease: 'power2.inOut'
});
```

### 4.4 - Context (Cleanup Automático)

```tsx
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Component() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Todas as animações aqui são automaticamente limpas
      gsap.to('.box', { x: 100, duration: 1 });
      gsap.to('.title', { opacity: 0.5, duration: 1 });
    }, containerRef);

    // Cleanup automático
    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>Conteúdo</div>;
}
```

### 4.5 - Animações Complexas com Timeline

```tsx
const tl = gsap.timeline({
  repeat: -1,           // Repetir infinitamente
  yoyo: true,           // Inverter e voltar
  repeatDelay: 1,       // 1s de delay entre repetições
});

tl.to('.box1', { x: 100, duration: 1 }, 'start')
  .to('.box2', { y: 100, duration: 1 }, 'start')
  .to('.box3', { rotation: 360, duration: 1 }, 'start')
  .to('.all', { opacity: 0.5, duration: 0.5 }, 'start+=1')
  .to('.all', { opacity: 1, duration: 0.5 });
```

### 4.6 - Exemplo Avançado: Parallax com ScrollTrigger

```tsx
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: true,
      },
      y: -100,  // Move para cima enquanto scroll desce
      ease: 'none'
    });
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <img ref={imageRef} src="..." className="w-full h-full object-cover" />
    </div>
  );
}
```

---

## Exemplos Práticos do Projeto

### Exemplo 1: HeroSection com GSAP

```tsx
// Arquivo: client/src/components/HeroSection.tsx

useEffect(() => {
  const tl = gsap.timeline();

  // Animar título
  tl.from(titleRef.current, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  }, 0);

  // Animar imagem com rotação 3D
  tl.from(imageRef.current, {
    opacity: 0,
    scale: 0.8,
    rotationY: 45,
    duration: 1.2,
    ease: 'back.out(1.7)',
  }, 0.2);

  // Flutuação contínua
  gsap.to(imageRef.current, {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}, []);
```

### Exemplo 2: BenefitsSection com ScrollTrigger

```tsx
// Arquivo: client/src/components/BenefitsSection.tsx

gsap.from(cards, {
  scrollTrigger: {
    trigger: cardsRef.current,
    start: 'top center+=100',
    end: 'center center',
    scrub: 1,
  },
  opacity: 0,
  y: 100,
  stagger: 0.2,
  duration: 1,
  ease: 'power3.out',
});
```

### Exemplo 3: FlavorsSection com Rotação

```tsx
// Arquivo: client/src/components/FlavorsSection.tsx

useEffect(() => {
  if (imageRef.current) {
    gsap.to(imageRef.current, {
      rotationY: 360,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });
  }
}, [activeFlavor]);
```

---

## Performance e Otimização

### ✅ Boas Práticas

1. **Use `will-change` em CSS para elementos animados**
```css
.elemento-animado {
  will-change: transform, opacity;
}
```

2. **Prefira `transform` e `opacity`**
```tsx
// ✅ Rápido (usa GPU)
gsap.to('.box', { x: 100, opacity: 0.5 });

// ❌ Lento (não usa GPU)
gsap.to('.box', { left: 100, backgroundColor: 'red' });
```

3. **Limpe animações quando desmontar**
```tsx
useEffect(() => {
  const animation = gsap.to(...);
  return () => animation.kill();
}, []);
```

4. **Use `once: true` em ScrollTrigger quando apropriado**
```tsx
scrollTrigger: {
  trigger: element,
  once: true,  // Anima apenas uma vez
}
```

5. **Evite animar muitos elementos simultaneamente**
```tsx
// ❌ Animar 1000 elementos
gsap.to('.item', { x: 100, stagger: 0.01 });

// ✅ Animar em grupos
gsap.to('.item:nth-child(-n+100)', { x: 100, stagger: 0.01 });
```

### 🔍 Debug

```tsx
// Ver o que está acontecendo
gsap.to('.box', {
  x: 100,
  duration: 1,
  onStart: () => console.log('Start'),
  onUpdate: function() {
    console.log('Progress:', this.progress());
  },
  onComplete: () => console.log('Complete'),
});

// ScrollTrigger markers
scrollTrigger: {
  markers: true,  // Mostra linhas de debug
}
```

---

## 📊 Comparação: CSS vs GSAP

| Recurso | CSS | GSAP |
|---------|-----|------|
| Animações simples | ✅ | ✅ |
| Scroll animations | ❌ | ✅ |
| Timelines complexas | ❌ | ✅ |
| Easing avançado | ❌ | ✅ |
| Controle preciso | ❌ | ✅ |
| Performance | ✅ | ✅ |
| Tamanho | Nativo | ~30kb |
| Curva de aprendizado | Fácil | Média |

---

## 🎯 Próximos Passos

1. **Experimente modificar as animações** do projeto
2. **Crie novos componentes** com GSAP
3. **Estude a documentação oficial**: https://gsap.com/docs
4. **Explore plugins**: MorphSVG, Draggable, Flip
5. **Otimize performance** com Lighthouse

---

## 📚 Recursos

- [GSAP Docs](https://gsap.com/docs)
- [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger)
- [Easing Visualizer](https://gsap.com/docs/v3/Eases)
- [GSAP Codepen](https://codepen.io/GreenSock)

---

**Parabéns! Você agora domina animações web do CSS puro até GSAP avançado!** 🚀
