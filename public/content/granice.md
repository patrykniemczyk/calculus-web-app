## Spis treści:
1. [Wprowadzenie do pojęcia granicy](#wprowadzenie-do-pojęcia-granicy)
2. [Definicja granicy funkcji](#definicja-granicy-funkcji)
3. [Własności granic funkcji](#własności-granic-funkcji)
4. [Twierdzenia o granicach funkcji](#twierdzenia-o-granicach-funkcji)
5. [Obliczanie granic](#obliczanie-granic)
6. [Granice jednostronne](#granice-jednostronne)
7. [Granice niewłaściwe](#granice-niewłaściwe)
8. [Granice w nieskończoności](#granice-w-nieskończoności)
9. [Symbole nieoznaczone](#symbole-nieoznaczone)
10. [Ciągłość a granice funkcji](#ciągłość-a-granice-funkcji)
11. [Zastosowania granic](#zastosowania-granic)
12. [Zadania z rozwiązaniami](#zadania-z-rozwiązaniami)

## Wprowadzenie do pojęcia granicy

Pojęcie granicy funkcji jest fundamentalnym konceptem w analizie matematycznej i stanowi podstawę do zrozumienia wielu innych zagadnień, takich jak pochodne czy całki. Intuicyjnie, granica funkcji pozwala nam określić, jak zachowuje się funkcja, gdy jej argument zbliża się do pewnej wartości.

Wyobraźmy sobie, że obserwujemy wartości funkcji $f(x)$, gdy $x$ zbliża się do pewnej liczby $a$. Jeśli wartości $f(x)$ zbliżają się do konkretnej liczby $L$, mówimy wówczas, że $L$ jest granicą funkcji $f(x)$ przy $x$ dążącym do $a$.

## Definicja granicy funkcji

### Definicja Cauchy'ego (epsilon-delta)

Granica funkcji $f(x)$ przy $x$ dążącym do $a$ wynosi $L$, co zapisujemy jako:

$$
\lim_{x \to a} f(x) = L
$$

wtedy i tylko wtedy, gdy dla każdej liczby $\varepsilon > 0$ istnieje taka liczba $\delta > 0$, że dla wszystkich $x \neq a$ spełniających nierówność $|x - a| < \delta$ zachodzi nierówność $|f(x) - L| < \varepsilon$.

Formalnie:

$$
\forall \varepsilon > 0 ~ \exists \delta > 0 ~ \forall x \neq a ~ (|x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon)
$$

### Definicja Heinego (za pomocą ciągów)

Granica funkcji $f(x)$ przy $x$ dążącym do $a$ wynosi $L$, jeżeli dla każdego ciągu $(x_n)$ takiego, że $\lim_{n \to \infty} x_n = a$ oraz $x_n \neq a$ dla każdego $n \in \mathbb{N}$, mamy:

$$
\lim_{n \to \infty} f(x_n) = L
$$

Obie definicje są równoważne w przestrzeniach metrycznych.

## Własności granic funkcji

- **Jednoznaczność granicy**: Jeśli granica funkcji istnieje, to jest ona jednoznacznie określona.
- **Lokalność**: Granica funkcji $f(x)$ przy $x$ dążącym do $a$ zależy jedynie od wartości funkcji $f$ w pewnym otoczeniu punktu $a$, ale nie od wartości $f(a)$.
- **Zbieżność do granicy**: Jeśli $\lim_{x \to a} f(x) = L$, to wartości funkcji $f(x)$ mogą być dowolnie bliskie $L$ pod warunkiem, że $x$ jest dostatecznie bliskie $a$.

## Twierdzenia o granicach funkcji

### Twierdzenia o granicach funkcji elementarnych

1. Dla dowolnej stałej $c$: $\lim_{x \to a} c = c$  
2. $\lim_{x \to a} x = a$  
3. $\lim_{x \to a} x^n = a^n$, dla $n \in \mathbb{N}$  
4. $\lim_{x \to a} \sqrt[n]{x} = \sqrt[n]{a}$, dla $n \in \mathbb{N}$ i $a > 0$ (dla $n$ parzystych) lub $a \in \mathbb{R}$ (dla $n$ nieparzystych)  
5. $\lim_{x \to a} \sin x = \sin a$  
6. $\lim_{x \to a} \cos x = \cos a$  
7. $\lim_{x \to a} e^x = e^a$  
8. $\lim_{x \to a} \ln x = \ln a$, dla $a > 0$

### Twierdzenia o działaniach na granicach

Niech $\lim_{x \to a} f(x) = A$ i $\lim_{x \to a} g(x) = B$. Wówczas:

1. **Granica sumy**: 
$$
\lim_{x \to a} [f(x) + g(x)] = A + B
$$

2. **Granica różnicy**: 
$$
\lim_{x \to a} [f(x) - g(x)] = A - B
$$

3. **Granica iloczynu**: 
$$
\lim_{x \to a} [f(x) \cdot g(x)] = A \cdot B
$$

4. **Granica ilorazu**: 
$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{A}{B}, \text{ gdzie } B \neq 0
$$

5. **Granica potęgi**: 
$$
\lim_{x \to a} [f(x)]^n = A^n \text{ dla } n \in \mathbb{N}
$$

6. **Granica złożenia funkcji**: Jeśli $\lim_{x \to a} f(x) = L$ oraz funkcja $g$ jest ciągła w punkcie $L$, to:
$$
\lim_{x \to a} g(f(x)) = g(L)
$$

## Obliczanie granic

### Strategie obliczania granic

1. **Podstawienie bezpośrednie**: Jeśli funkcja jest ciągła w punkcie $a$, to $\lim_{x \to a} f(x) = f(a)$.
2. **Przekształcanie wyrażeń**: Uprość wyrażenie algebraicznie przed obliczeniem granicy.
3. **Korzystanie z twierdzeń o granicach**: Zastosuj poznane wcześniej twierdzenia.
4. **Reguła de l'Hospitala**: Dla granic postaci $\frac{0}{0}$ lub $\frac{\infty}{\infty}$.
5. **Rozwinięcie w szereg**: Dla skomplikowanych funkcji, czasem pomocne jest rozwinięcie w szereg Taylora.

### Przykłady obliczania granic

#### Przykład 1: Obliczenie granicy wielomianu
$$
\lim_{x \to 2} (3x^2 - 5x + 1)
$$

Wielomian jest funkcją ciągłą, więc możemy podstawić $x = 2$:

$$
\lim_{x \to 2} (3x^2 - 5x + 1) = 3 \cdot 2^2 - 5 \cdot 2 + 1 = 3 \cdot 4 - 10 + 1 = 12 - 10 + 1 = 3
$$

#### Przykład 2: Granica ilorazu wielomianów
$$
\lim_{x \to 3} \frac{x^2 - 9}{x - 3}
$$

Zauważmy, że $x^2 - 9 = (x - 3)(x + 3)$, więc:

$$
\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = \lim_{x \to 3} \frac{(x - 3)(x + 3)}{x - 3} = \lim_{x \to 3} (x + 3) = 3 + 3 = 6
$$

#### Przykład 3: Granica funkcji trygonometrycznej
$$
\lim_{x \to 0} \frac{\sin x}{x}
$$

To jest słynna granica, której wartość wynosi 1:

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

Dowód tego faktu opiera się na nierównościach dotyczących funkcji $\sin x$.

## Granice jednostronne

Czasami funkcja może mieć różne granice przy zbliżaniu się do punktu $a$ z lewej i z prawej strony.

### Granica lewostronna

Granica lewostronna funkcji $f(x)$ przy $x$ dążącym do $a$ oznacza granicę, gdy $x$ zbliża się do $a$ przyjmując wartości mniejsze od $a$. Oznaczamy ją jako:

$$
\lim_{x \to a^-} f(x) \text{ lub } \lim_{x \uparrow a} f(x)
$$

### Granica prawostronna

Granica prawostronna funkcji $f(x)$ przy $x$ dążącym do $a$ oznacza granicę, gdy $x$ zbliża się do $a$ przyjmując wartości większe od $a$. Oznaczamy ją jako:

$$
\lim_{x \to a^+} f(x) \text{ lub } \lim_{x \downarrow a} f(x)
$$

### Związek między granicą a granicami jednostronnymi

Granica funkcji $f(x)$ przy $x$ dążącym do $a$ istnieje wtedy i tylko wtedy, gdy istnieją i są równe granice jednostronne:

$$
\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L
$$

### Przykład granic jednostronnych

Rozważmy funkcję $f(x) = |x|/x$ dla $x \neq 0$. Wtedy:

$$
\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1
$$

$$
\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1
$$

Ponieważ granice jednostronne są różne, granica $\lim_{x \to 0} \frac{|x|}{x}$ nie istnieje.

## Granice niewłaściwe

Granice niewłaściwe to takie, w których wartość funkcji dąży do nieskończoności lub argument funkcji dąży do nieskończoności.

### Granice dążące do nieskończoności

Mówimy, że granica funkcji $f(x)$ przy $x$ dążącym do $a$ wynosi nieskończoność (oznaczana jako $\infty$), jeśli wartości funkcji $f(x)$ stają się dowolnie duże, gdy $x$ jest dostatecznie blisko $a$. Zapisujemy to jako:

$$
\lim_{x \to a} f(x) = \infty
$$

Podobnie definiujemy granicę dążącą do $-\infty$.

### Przykłady granic niewłaściwych

$$
\lim_{x \to 0} \frac{1}{x^2} = \infty
$$
   
ponieważ gdy $x$ zbliża się do 0, wartość $\frac{1}{x^2}$ rośnie nieograniczenie.

$$
\lim_{x \to 0^+} \frac{1}{x} = \infty, \text{ ale } \lim_{x \to 0^-} \frac{1}{x} = -\infty
$$
   
co ilustruje różne zachowanie funkcji przy zbliżaniu się do punktu 0 z różnych stron.

## Granice w nieskończoności

Granice w nieskończoności badają zachowanie funkcji, gdy zmienna niezależna dąży do nieskończoności.

### Granica przy $x$ dążącym do $\infty$

Piszemy $\lim_{x \to \infty} f(x) = L$, jeśli wartości funkcji $f(x)$ zbliżają się do liczby $L$, gdy $x$ rośnie nieograniczenie.

### Granica przy $x$ dążącym do $-\infty$

Piszemy $\lim_{x \to -\infty} f(x) = L$, jeśli wartości funkcji $f(x)$ zbliżają się do liczby $L$, gdy $x$ maleje nieograniczenie.

### Przykłady granic w nieskończoności

$$
\lim_{x \to \infty} \frac{1}{x} = 0
$$
   
ponieważ gdy $x$ rośnie nieograniczenie, wartość $\frac{1}{x}$ zbliża się do 0.

$$
\lim_{x \to \infty} \frac{3x^2 + 2x - 1}{x^2 + 5} = 3
$$
   
co wynika z dzielenia licznika i mianownika przez najwyższą potęgę $x$, czyli $x^2$.

$$
\lim_{x \to \infty} \frac{2x^3 - x + 7}{5x^3 + 2x} = \frac{2}{5}
$$
   
co wynika z dzielenia licznika i mianownika przez $x^3$.

## Symbole nieoznaczone

Symbole nieoznaczone to wyrażenia, które przy bezpośrednim podstawieniu dają nieokreślone wartości. Najczęstsze symbole nieoznaczone to:

- $\frac{0}{0}$ (postać nieoznaczona ilorazu)
- $\frac{\infty}{\infty}$ (postać nieoznaczona ilorazu)
- $0 \cdot \infty$ (postać nieoznaczona iloczynu)
- $\infty - \infty$ (postać nieoznaczona różnicy)
- $0^0$, $1^{\infty}$, $\infty^0$ (postaci nieoznaczone potęgowania)

### Metody rozwiązywania symboli nieoznaczonych

**Przekształcenia algebraiczne**: Często symbole nieoznaczone można rozwiązać poprzez przekształcenia algebraiczne, jak np. skracanie czynników.

**Reguła de l'Hospitala**: Dla granic postaci $\frac{0}{0}$ lub $\frac{\infty}{\infty}$, można zastosować regułę:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

pod warunkiem, że granica po prawej stronie istnieje.

**Logarytmowanie**: Dla symboli nieoznaczonych związanych z potęgowaniem, często pomocne jest zastosowanie logarytmu.

### Przykłady rozwiązywania symboli nieoznaczonych

#### Przykład 1: Postać $\frac{0}{0}$
$$
\lim_{x \to 0} \frac{\sin x}{x}
$$

Stosując regułę de l'Hospitala:

$$
\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = \cos 0 = 1
$$

#### Przykład 2: Postać $\frac{\infty}{\infty}$
$$
\lim_{x \to \infty} \frac{2x^2 + 3x}{4x^2 - 1}
$$

Dzielimy licznik i mianownik przez $x^2$:

$$
\lim_{x \to \infty} \frac{2x^2 + 3x}{4x^2 - 1} = \lim_{x \to \infty} \frac{2 + \frac{3}{x}}{4 - \frac{1}{x^2}} = \frac{2 + 0}{4 - 0} = \frac{2}{4} = \frac{1}{2}
$$

#### Przykład 3: Postać $1^{\infty}$
$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x
$$

To jest granica definicyjna liczby $e$:

$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e
$$

## Ciągłość a granice funkcji

Funkcja $f$ jest ciągła w punkcie $a$, jeśli spełnione są następujące warunki:

1. Funkcja $f$ jest określona w punkcie $a$, czyli $f(a)$ istnieje.
2. Granica funkcji $f$ przy $x$ dążącym do $a$ istnieje, czyli $\lim_{x \to a} f(x)$ istnieje.
3. Granica funkcji $f$ przy $x$ dążącym do $a$ jest równa wartości funkcji w punkcie $a$, czyli:

$$
\lim_{x \to a} f(x) = f(a)
$$

### Własności funkcji ciągłych

1. **Suma, różnica, iloczyn i iloraz** funkcji ciągłych są funkcjami ciągłymi (iloraz pod warunkiem, że mianownik nie jest zerem).
2. **Złożenie funkcji ciągłych** jest funkcją ciągłą.
3. **Twierdzenie Weierstrassa**: Funkcja ciągła na domkniętym i ograniczonym przedziale $[a, b]$ osiąga swoją wartość największą i najmniejszą.
4. **Twierdzenie Darboux**: Funkcja ciągła na przedziale $[a, b]$ przyjmuje każdą wartość między $f(a)$ a $f(b)$.
5. **Twierdzenie o wartości pośredniej**: Jeśli funkcja $f$ jest ciągła na przedziale $[a, b]$ i $f(a) \cdot f(b) < 0$, to istnieje taki punkt $c \in (a, b)$, że:

$$
f(c) = 0
$$

## Zastosowania granic

### Zastosowania w analizie matematycznej

1. **Definicja pochodnej**: Pochodna funkcji $f$ w punkcie $a$ jest zdefiniowana jako:
$$
f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
$$
2. **Badanie ciągłości funkcji**: Granice są kluczowe do określania ciągłości funkcji.
3. **Asymptoty funkcji**: Granice pomagają w znajdowaniu asymptot funkcji.

### Zastosowania w fizyce

1. **Prędkość chwilowa**: 

$$
v(t) = \lim_{\Delta t \to 0} \frac{\Delta s}{\Delta t}
$$

2. **Przyspieszenie chwilowe**: 

$$
a(t) = \lim_{\Delta t \to 0} \frac{\Delta v}{\Delta t}
$$

3. **Moc chwilowa**: 

$$
P(t) = \lim_{\Delta t \to 0} \frac{\Delta W}{\Delta t}
$$

### Zastosowania w ekonomii

1. **Koszt krańcowy**: 

$$
MC(q) = \lim_{\Delta q \to 0} \frac{\Delta C}{\Delta q}
$$

2. **Przychód krańcowy**: 

$$
MR(q) = \lim_{\Delta q \to 0} \frac{\Delta R}{\Delta q}
$$

3. **Elastyczność cenowa popytu**: 

$$
E_p = \lim_{\Delta p \to 0} \frac{\Delta Q / Q}{\Delta p / p}
$$

## Zadania z rozwiązaniami

### Zadanie 1
Oblicz granicę: 

$$
\lim_{x \to 2} \frac{x^2 - 4}{x - 2}
$$

**Rozwiązanie:**

$$
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 2 + 2 = 4
$$

### Zadanie 2
Oblicz granicę: 

$$
\lim_{x \to 0} \frac{\sin 3x}{2x}
$$

**Rozwiązanie:**

$$
\lim_{x \to 0} \frac{\sin 3x}{2x} = \lim_{x \to 0} \frac{3 \sin 3x}{6x} = \frac{3}{6} \lim_{x \to 0} \frac{\sin 3x}{3x} \cdot 3 = \frac{3}{6} \cdot 1 \cdot 3 = \frac{3}{2}
$$

Skorzystaliśmy z faktu, że $\lim_{x \to 0} \frac{\sin x}{x} = 1$.

### Zadanie 3
Oblicz granicę: 

$$
\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^{3x}
$$

**Rozwiązanie:**

$$
\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^{3x} = \lim_{x \to \infty} \left[\left(1 + \frac{2}{x}\right)^{\frac{x}{2}}\right]^{6} = \left[\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^{\frac{x}{2}}\right]^{6}
$$

Podstawiamy $y = \frac{x}{2}$, więc gdy $x \to \infty$, to $y \to \infty$:

$$
\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^{3x} = \left[\lim_{y \to \infty} \left(1 + \frac{1}{y}\right)^{y}\right]^{6} = (e)^{6} = e^{6}
$$

### Zadanie 4
Oblicz granicę: 

$$
\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1}
$$

**Rozwiązanie:**

$$
\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1} = \lim_{x \to 1} \frac{(x - 1)(x^2 + x + 1)}{(x - 1)(x + 1)} = \lim_{x \to 1} \frac{x^2 + x + 1}{x + 1} = \frac{1^2 + 1 + 1}{1 + 1} = \frac{3}{2}
$$

### Zadanie 5
Oblicz granicę: 

$$
\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}
$$

**Rozwiązanie:**
Zastosujemy regułę de l'Hospitala dwukrotnie, ponieważ mamy postać nieoznaczoną $\frac{0}{0}$:

$$
\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x} = \lim_{x \to 0} \frac{e^x}{2} = \frac{e^0}{2} = \frac{1}{2}
$$

### Zadanie 6
Zbadaj istnienie granicy funkcji $f(x) = \frac{|x|}{x}$ w punkcie $x = 0$.

**Rozwiązanie:**
Obliczmy granice jednostronne:

$$
\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1
$$

$$
\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1
$$

Ponieważ granice jednostronne są różne, granica $\lim_{x \to 0} \frac{|x|}{x}$ nie istnieje.

### Zadanie 7
Oblicz granicę: 

$$
\lim_{x \to \infty} \frac{3x^3 + 2x^2}{5x^3 - 7x}
$$

**Rozwiązanie:**
Dzielimy licznik i mianownik przez najwyższą potęgę $x$, czyli $x^3$:

$$
\lim_{x \to \infty} \frac{3x^3 + 2x^2}{5x^3 - 7x} = \lim_{x \to \infty} \frac{3 + \frac{2}{x}}{5 - \frac{7}{x^2}} = \frac{3 + 0}{5 - 0} = \frac{3}{5}
$$

### Zadanie 8
Oblicz granicę: 

$$
\lim_{x \to 0} \frac{\tan 2x}{3x}
$$

**Rozwiązanie:**

$$
\lim_{x \to 0} \frac{\tan 2x}{3x} = \lim_{x \to 0} \frac{\sin 2x}{3x \cos 2x} = \lim_{x \to 0} \frac{2 \sin 2x}{6x} \cdot \frac{1}{\cos 2x}
$$
$$
= \frac{2}{6} \lim_{x \to 0} \frac{\sin 2x}{2x} \cdot \lim_{x \to 0} \frac{1}{\cos 2x} = \frac{2}{6} \cdot 1 \cdot \frac{1}{\cos 0} = \frac{2}{6} \cdot 1 \cdot 1 = \frac{1}{3}
$$

### Zadanie 9
Oblicz granicę: 

$$
\lim_{x \to 0} \left(\frac{1}{\sin x} - \frac{1}{x}\right)
$$

**Rozwiązanie:**

$$
\lim_{x \to 0} \left(\frac{1}{\sin x} - \frac{1}{x}\right) = \lim_{x \to 0} \frac{x - \sin x}{x \sin x}
$$

Mamy postać nieoznaczoną $\frac{0}{0}$. Zastosujmy regułę de l'Hospitala:

$$
\lim_{x \to 0} \frac{x - \sin x}{x \sin x} = \lim_{x \to 0} \frac{1 - \cos x}{\sin x + x \cos x}
$$

Znowu mamy postać nieoznaczoną $\frac{0}{0}$. Stosujemy regułę de l'Hospitala ponownie:

$$
\lim_{x \to 0} \frac{1 - \cos x}{\sin x + x \cos x} = \lim_{x \to 0} \frac{\sin x}{\cos x + \cos x - x \sin x} 
$$
$$
= \lim_{x \to 0} \frac{\sin x}{2\cos x - x \sin x} = \frac{\sin 0}{2\cos 0 - 0 \cdot \sin 0} = \frac{0}{2 \cdot 1 - 0} = 0
$$

### Zadanie 10
Oblicz granicę: 

$$
\lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right)
$$

**Rozwiązanie:**

$$
\lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right) = \lim_{x \to \infty} \frac{(\sqrt{x^2 + x} - x)(\sqrt{x^2 + x} + x)}{\sqrt{x^2 + x} + x} = \lim_{x \to \infty} \frac{x^2 + x - x^2}{\sqrt{x^2 + x} + x} = \lim_{x \to \infty} \frac{x}{\sqrt{x^2 + x} + x} = \lim_{x \to \infty} \frac{x}{x\sqrt{1 + \frac{1}{x}} + x} = \lim_{x \to \infty} \frac{1}{\sqrt{1 + \frac{1}{x}} + 1} = \frac{1}{\sqrt{1 + 0} + 1} = \frac{1}{2}
$$