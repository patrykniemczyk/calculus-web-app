## Spis treści:
1. [Wprowadzenie do pochodnych](#wprowadzenie-do-pochodnych)
2. [Definicja pochodnej](#definicja-pochodnej)
3. [Interpretacja geometryczna](#interpretacja-geometryczna)
4. [Interpretacja fizyczna](#interpretacja-fizyczna)
5. [Reguły różniczkowania](#reguły-różniczkowania)
6. [Pochodne funkcji elementarnych](#pochodne-funkcji-elementarnych)
7. [Różniczkowanie funkcji złożonej](#różniczkowanie-funkcji-złożonej)
8. [Pochodne wyższych rzędów](#pochodne-wyższych-rzędów)
9. [Pochodna funkcji uwikłanej](#pochodna-funkcji-uwikłanej)
10. [Różniczka funkcji](#różniczka-funkcji)
11. [Twierdzenia o wartości średniej](#twierdzenia-o-wartości-średniej)
12. [Zastosowania pochodnych](#zastosowania-pochodnych)
13. [Reguła de l'Hospitala](#reguła-de-lhospitala)
14. [Wzór Taylora](#wzór-taylora)
15. [Ekstrema funkcji](#ekstrema-funkcji)
16. [Wklęsłość i wypukłość funkcji](#wklęsłość-i-wypukłość-funkcji)
17. [Zadania z rozwiązaniami](#zadania-z-rozwiązaniami)

## Wprowadzenie do pochodnych

Pochodna funkcji jest jednym z fundamentalnych pojęć analizy matematycznej. Stanowi ona podstawę rachunku różniczkowego i pozwala na badanie szybkości zmian funkcji, wyznaczanie ekstremów, punktów przegięcia oraz wielu innych własności funkcji. Pojęcie pochodnej znajduje liczne zastosowania w fizyce, ekonomii, inżynierii i innych dziedzinach nauki.

Intuicyjnie, pochodna funkcji $f$ w punkcie $x$ opisuje szybkość zmiany wartości funkcji $f$ względem zmiany argumentu $x$ w tym punkcie. Można ją też interpretować jako nachylenie stycznej do wykresu funkcji w danym punkcie.

## Definicja pochodnej

### Definicja jako granicy ilorazu różnicowego

Pochodną funkcji $f$ w punkcie $x_0$ nazywamy granicę ilorazu różnicowego, gdy przyrost argumentu dąży do zera:

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}
$$

Równoważnie, pochodną można zdefiniować jako:

$$
f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}
$$

### Interpretacja ilorazu różnicowego

Iloraz różnicowy $\frac{f(x_0 + h) - f(x_0)}{h}$ przedstawia średnią szybkość zmiany funkcji $f$ na przedziale $[x_0, x_0 + h]$. Gdy $h \to 0$, otrzymujemy chwilową szybkość zmiany funkcji w punkcie $x_0$.

### Notacja pochodnej

Istnieje kilka równoważnych sposobów oznaczania pochodnej funkcji $f$ w punkcie $x$:

- $f'(x)$ - notacja Lagrange'a
- $\frac{df}{dx}$ lub $\frac{d}{dx}f(x)$ - notacja Leibniza
- $Df(x)$ lub $D_x f$ - notacja operatorowa
- $\dot{f}(x)$ - notacja Newtona (głównie w fizyce, dla pochodnej po czasie)

## Interpretacja geometryczna

Geometrycznie, pochodna funkcji $f$ w punkcie $x_0$ reprezentuje współczynnik kierunkowy (nachylenie) stycznej do wykresu funkcji $f$ w punkcie $(x_0, f(x_0))$.

Równanie stycznej do wykresu funkcji $f$ w punkcie $(x_0, f(x_0))$ ma postać:

$$
y - f(x_0) = f'(x_0)(x - x_0)
$$

lub równoważnie:

$$
y = f(x_0) + f'(x_0)(x - x_0)
$$

### Przykład interpretacji geometrycznej

Dla funkcji $f(x) = x^2$ w punkcie $x_0 = 2$:

$$
f'(2) = 2 \cdot 2 = 4
$$

Równanie stycznej w punkcie $(2, 4)$ wynosi:

$$
y - 4 = 4(x - 2)
$$
$$
y = 4x - 4
$$

## Interpretacja fizyczna

W fizyce, pochodna funkcji opisującej położenie obiektu względem czasu reprezentuje prędkość tego obiektu, a druga pochodna - jego przyspieszenie.

Jeśli $s(t)$ opisuje położenie ciała w chwili $t$, to:
- $v(t) = s'(t)$ - prędkość w chwili $t$
- $a(t) = v'(t) = s''(t)$ - przyspieszenie w chwili $t$

### Inne interpretacje fizyczne pochodnej

- Szybkość reakcji chemicznej
- Natężenie prądu elektrycznego jako pochodna ładunku po czasie
- Moc jako pochodna energii po czasie
- Siła jako pochodna pędu po czasie

## Reguły różniczkowania

### Podstawowe reguły różniczkowania

1. Pochodna funkcji stałej:
$$
\frac{d}{dx}(c) = 0
$$

2. Pochodna funkcji identycznościowej:
$$
\frac{d}{dx}(x) = 1
$$

3. Pochodna sumy funkcji:
$$
\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)
$$

4. Pochodna różnicy funkcji:
$$
\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)
$$

5. Pochodna iloczynu funkcji (reguła Leibniza):
$$
\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)
$$

6. Pochodna ilorazu funkcji:
$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}
$$

7. Pochodna funkcji złożonej (reguła łańcuchowa):
$$
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
$$

8. Pochodna funkcji odwrotnej:
$$
[f^{-1}]'(y) = \frac{1}{f'(x)}
$$
gdzie $y = f(x)$ i $x = f^{-1}(y)$

### Przykłady zastosowania reguł różniczkowania

#### Przykład 1: Pochodna sumy
Obliczmy pochodną funkcji $h(x) = x^3 + 2x^2 - 5x + 1$:

$$
h'(x) = \frac{d}{dx}(x^3) + \frac{d}{dx}(2x^2) - \frac{d}{dx}(5x) + \frac{d}{dx}(1)
$$
$$
h'(x) = 3x^2 + 4x - 5 + 0 = 3x^2 + 4x - 5
$$

#### Przykład 2: Pochodna iloczynu
Obliczmy pochodną funkcji $g(x) = x^2 \cdot \sin x$:

$$
g'(x) = \frac{d}{dx}(x^2) \cdot \sin x + x^2 \cdot \frac{d}{dx}(\sin x)
$$
$$
g'(x) = 2x \cdot \sin x + x^2 \cdot \cos x
$$

#### Przykład 3: Pochodna ilorazu
Obliczmy pochodną funkcji $f(x) = \frac{x^2 + 1}{x - 3}$:

$$
f'(x) = \frac{(2x) \cdot (x - 3) - (x^2 + 1) \cdot 1}{(x - 3)^2}
$$
$$
f'(x) = \frac{2x^2 - 6x - x^2 - 1}{(x - 3)^2} = \frac{x^2 - 6x - 1}{(x - 3)^2}
$$

## Pochodne funkcji elementarnych

### Pochodne funkcji potęgowych

1. Dla dowolnej stałej $n$:
$$
\frac{d}{dx}(x^n) = n \cdot x^{n-1}
$$

2. Dla funkcji $f(x) = \sqrt{x} = x^{1/2}$:
$$
f'(x) = \frac{1}{2} \cdot x^{-1/2} = \frac{1}{2\sqrt{x}}
$$

3. Dla funkcji $f(x) = \frac{1}{x} = x^{-1}$:
$$
f'(x) = -1 \cdot x^{-2} = -\frac{1}{x^2}
$$

### Pochodne funkcji wykładniczych i logarytmicznych

1. Pochodna funkcji wykładniczej o podstawie $e$:
$$
\frac{d}{dx}(e^x) = e^x
$$

2. Pochodna funkcji wykładniczej o dowolnej podstawie $a > 0$:
$$
\frac{d}{dx}(a^x) = a^x \cdot \ln a
$$

3. Pochodna logarytmu naturalnego:
$$
\frac{d}{dx}(\ln x) = \frac{1}{x}
$$

4. Pochodna logarytmu o dowolnej podstawie $a > 0$, $a \neq 1$:
$$
\frac{d}{dx}(\log_a x) = \frac{1}{x \cdot \ln a}
$$

### Pochodne funkcji trygonometrycznych

1. $\frac{d}{dx}(\sin x) = \cos x$
2. $\frac{d}{dx}(\cos x) = -\sin x$
3. $\frac{d}{dx}(\tan x) = \frac{1}{\cos^2 x} = 1 + \tan^2 x$
4. $\frac{d}{dx}(\cot x) = -\frac{1}{\sin^2 x} = -1 - \cot^2 x$
5. $\frac{d}{dx}(\sec x) = \sec x \cdot \tan x$
6. $\frac{d}{dx}(\csc x) = -\csc x \cdot \cot x$

### Pochodne funkcji cyklometrycznych (arkus)

1. $\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1-x^2}}$
2. $\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1-x^2}}$
3. $\frac{d}{dx}(\arctan x) = \frac{1}{1+x^2}$
4. $\frac{d}{dx}(\text{arccot}\, x) = -\frac{1}{1+x^2}$
5. $\frac{d}{dx}(\text{arcsec}\, x) = \frac{1}{|x|\sqrt{x^2-1}}$
6. $\frac{d}{dx}(\text{arccsc}\, x) = -\frac{1}{|x|\sqrt{x^2-1}}$

### Pochodne funkcji hiperbolicznych

1. $\frac{d}{dx}(\sinh x) = \cosh x$
2. $\frac{d}{dx}(\cosh x) = \sinh x$
3. $\frac{d}{dx}(\tanh x) = \frac{1}{\cosh^2 x} = 1 - \tanh^2 x$
4. $\frac{d}{dx}(\coth x) = -\frac{1}{\sinh^2 x} = -1 + \coth^2 x$
5. $\frac{d}{dx}(\text{sech}\, x) = -\text{sech}\, x \cdot \tanh x$
6. $\frac{d}{dx}(\text{csch}\, x) = -\text{csch}\, x \cdot \coth x$

### Pochodne funkcji hiperbolicznych odwrotnych

1. $\frac{d}{dx}(\text{arcsinh}\, x) = \frac{1}{\sqrt{1+x^2}}$
2. $\frac{d}{dx}(\text{arccosh}\, x) = \frac{1}{\sqrt{x^2-1}}$
3. $\frac{d}{dx}(\text{arctanh}\, x) = \frac{1}{1-x^2}$
4. $\frac{d}{dx}(\text{arccoth}\, x) = \frac{1}{1-x^2}$

## Różniczkowanie funkcji złożonej

### Reguła łańcuchowa

Reguła łańcuchowa (ang. Chain Rule) pozwala na obliczanie pochodnej funkcji złożonej $h(x) = f(g(x))$:

$$
h'(x) = f'(g(x)) \cdot g'(x)
$$

Można to zapisać także w notacji Leibniza:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

gdzie $y = f(u)$ i $u = g(x)$.

### Przykłady zastosowania reguły łańcuchowej

#### Przykład 1
Obliczmy pochodną funkcji $h(x) = \sin(x^2)$:

$$
h'(x) = \cos(x^2) \cdot \frac{d}{dx}(x^2) = \cos(x^2) \cdot 2x = 2x \cdot \cos(x^2)
$$

#### Przykład 2
Obliczmy pochodną funkcji $f(x) = e^{\sin x}$:

$$
f'(x) = e^{\sin x} \cdot \frac{d}{dx}(\sin x) = e^{\sin x} \cdot \cos x
$$

#### Przykład 3
Obliczmy pochodną funkcji $g(x) = \ln(2x^3 + 1)$:

$$
g'(x) = \frac{1}{2x^3 + 1} \cdot \frac{d}{dx}(2x^3 + 1) = \frac{1}{2x^3 + 1} \cdot 6x^2 = \frac{6x^2}{2x^3 + 1}
$$

## Pochodne wyższych rzędów

Pochodną drugiego rzędu funkcji $f$ definiujemy jako pochodną z pochodnej pierwszego rzędu:

$$
f''(x) = (f'(x))'
$$

W notacji Leibniza:

$$
\frac{d^2f}{dx^2} = \frac{d}{dx}\left(\frac{df}{dx}\right)
$$

Analogicznie definiuje się pochodne wyższych rzędów:

$$
f^{(n)}(x) = \frac{d^n f}{dx^n}
$$

### Przykłady pochodnych wyższych rzędów

#### Przykład 1
Dla funkcji $f(x) = x^3 - 2x^2 + 5x - 1$:

$$
f'(x) = 3x^2 - 4x + 5
$$
$$
f''(x) = 6x - 4
$$
$$
f^{(3)}(x) = 6
$$
$$
f^{(4)}(x) = 0
$$
$$
f^{(n)}(x) = 0 \text{ dla } n \geq 4
$$

#### Przykład 2
Dla funkcji $f(x) = \sin x$:

$$
f'(x) = \cos x
$$
$$
f''(x) = -\sin x
$$
$$
f^{(3)}(x) = -\cos x
$$
$$
f^{(4)}(x) = \sin x
$$

Zauważmy, że pochodne funkcji $\sin x$ powtarzają się cyklicznie co 4.

## Pochodna funkcji uwikłanej

Funkcja uwikłana to funkcja zadana równaniem $F(x, y) = 0$, gdzie $y$ jest funkcją $x$, ale nie jest wyrażona jawnie.

Aby obliczyć pochodną $\frac{dy}{dx}$ funkcji uwikłanej, różniczkujemy równanie $F(x, y) = 0$ względem $x$, traktując $y$ jako funkcję $x$:

$$
\frac{\partial F}{\partial x} + \frac{\partial F}{\partial y} \cdot \frac{dy}{dx} = 0
$$

Stąd:

$$
\frac{dy}{dx} = -\frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial y}}
$$

### Przykład funkcji uwikłanej

Rozważmy równanie okręgu $x^2 + y^2 = 1$. Traktując $y$ jako funkcję $x$, obliczmy $\frac{dy}{dx}$.

Różniczkując względem $x$:

$$
2x + 2y \cdot \frac{dy}{dx} = 0
$$

Stąd:

$$
\frac{dy}{dx} = -\frac{x}{y}
$$

## Różniczka funkcji

Różniczka funkcji $f$ w punkcie $x$ dla przyrostu argumentu $\Delta x$ jest zdefiniowana jako:

$$
df = f'(x) \cdot \Delta x
$$

Dla funkcji wielu zmiennych $f(x_1, x_2, \ldots, x_n)$, różniczka zupełna ma postać:

$$
df = \frac{\partial f}{\partial x_1} dx_1 + \frac{\partial f}{\partial x_2} dx_2 + \ldots + \frac{\partial f}{\partial x_n} dx_n
$$

### Zastosowania różniczki

1. **Przybliżone obliczenia**: Dla małych wartości $\Delta x$, przyrost funkcji można przybliżyć różniczką:
$$
f(x + \Delta x) - f(x) \approx f'(x) \cdot \Delta x
$$

2. **Szacowanie błędów pomiarowych**: Jeśli $x$ jest obarczony błędem $\Delta x$, to błąd wartości funkcji można oszacować jako:
$$
\Delta f \approx |f'(x)| \cdot \Delta x
$$

### Przykład zastosowania różniczki

Używając różniczki, obliczmy przybliżoną wartość $\sqrt{26}$.

Zastosujemy funkcję $f(x) = \sqrt{x}$ w otoczeniu punktu $x_0 = 25$:

$$
f(x_0) = \sqrt{25} = 5
$$
$$
f'(x) = \frac{1}{2\sqrt{x}}
$$
$$
f'(25) = \frac{1}{2\sqrt{25}} = \frac{1}{10}
$$

Dla $\Delta x = 1$ (przejście od 25 do 26) mamy:

$$
\sqrt{26} \approx \sqrt{25} + f'(25) \cdot 1 = 5 + \frac{1}{10} = 5.1
$$

Porównanie z wartością dokładną: $\sqrt{26} \approx 5.099$ - przybliżenie jest bardzo dobre.

## Twierdzenia o wartości średniej

### Twierdzenie Rolle'a

Jeśli funkcja $f$ jest ciągła na $[a, b]$, różniczkowalna na $(a, b)$ oraz $f(a) = f(b)$, to istnieje taki punkt $c \in (a, b)$, że:

$$
f'(c) = 0
$$

### Twierdzenie Lagrange'a o wartości średniej

Jeśli funkcja $f$ jest ciągła na $[a, b]$ i różniczkowalna na $(a, b)$, to istnieje taki punkt $c \in (a, b)$, że:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

Interpretacja geometryczna: istnieje punkt na wykresie funkcji, w którym styczna jest równoległa do siecznej łączącej punkty $(a, f(a))$ i $(b, f(b))$.

### Twierdzenie Cauchy'ego o wartości średniej

Jeśli funkcje $f$ i $g$ są ciągłe na $[a, b]$ i różniczkowalne na $(a, b)$ oraz $g'(x) \neq 0$ dla wszystkich $x \in (a, b)$, to istnieje taki punkt $c \in (a, b)$, że:

$$
\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}
$$

## Zastosowania pochodnych

### Badanie monotoniczności funkcji

Funkcja $f$ jest:
- rosnąca na przedziale $(a, b)$, gdy $f'(x) > 0$ dla wszystkich $x \in (a, b)$
- malejąca na przedziale $(a, b)$, gdy $f'(x) < 0$ dla wszystkich $x \in (a, b)$
- stała na przedziale $(a, b)$, gdy $f'(x) = 0$ dla wszystkich $x \in (a, b)$

### Wyznaczanie ekstremów funkcji

- Warunek konieczny istnienia ekstremum w punkcie $x_0$: $f'(x_0) = 0$ lub $f'(x_0)$ nie istnieje
- Warunek wystarczający na istnienie maksimum lokalnego: $f'(x_0) = 0$ i $f''(x_0) < 0$
- Warunek wystarczający na istnienie minimum lokalnego: $f'(x_0) = 0$ i $f''(x_0) > 0$
- Gdy $f'(x_0) = 0$ i $f''(x_0) = 0$, należy badać wyższe pochodne lub stosować inne metody

### Badanie wypukłości i wklęsłości funkcji

- Funkcja $f$ jest wypukła na przedziale $(a, b)$, gdy $f''(x) > 0$ dla wszystkich $x \in (a, b)$
- Funkcja $f$ jest wklęsła na przedziale $(a, b)$, gdy $f''(x) < 0$ dla wszystkich $x \in (a, b)$
- Punkt przegięcia wykresu funkcji $f$ to punkt $(x_0, f(x_0))$, w którym funkcja zmienia wypukłość na wklęsłość lub odwrotnie, czyli $f''(x_0) = 0$ i $f''$ zmienia znak w otoczeniu $x_0$

### Badanie granic funkcji i asymptot

- Asymptota pionowa: $\lim_{x \to a} f(x) = \pm \infty$
- Asymptota pozioma: $\lim_{x \to \pm \infty} f(x) = b$
- Asymptota ukośna: $\lim_{x \to \pm \infty} [f(x) - (ax + b)] = 0$, gdzie $a \neq 0$

### Optymalizacja

Pochodne są niezbędne do rozwiązywania problemów optymalizacyjnych, tj. znajdowania maksymalnych lub minimalnych wartości funkcji pod pewnymi warunkami.

#### Przykład optymalizacji

Problem: Znaleźć wymiary prostokąta o obwodzie 100 cm, który ma największe pole.

Niech $x$ będzie długością prostokąta, a $y$ szerokością. Mamy:
- Obwód: $2x + 2y = 100$ → $y = 50 - x$
- Pole: $A(x) = x \cdot y = x(50 - x) = 50x - x^2$

Różniczkujemy względem $x$:
$$
A'(x) = 50 - 2x
$$

Rozwiązujemy równanie $A'(x) = 0$:
$$
50 - 2x = 0
$$
$$
x = 25
$$

Zatem $y = 50 - 25 = 25$. Prostokąt o wymiarach 25 cm × 25 cm (czyli kwadrat) ma największe pole.

## Reguła de l'Hospitala

Reguła de l'Hospitala jest metodą obliczania granic funkcji w przypadkach, gdy bezpośrednie podstawienie prowadzi do symboli nieoznaczonych postaci $\frac{0}{0}$ lub $\frac{\infty}{\infty}$.

Jeżeli $\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = 0$ lub $\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = \pm \infty$, oraz istnieje granica $\lim_{x \to a} \frac{f'(x)}{g'(x)}$, to:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

### Przykłady zastosowania reguły de l'Hospitala

#### Przykład 1
Obliczmy granicę $\lim_{x \to 0} \frac{\sin x}{x}$:

$$
\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = \cos 0 = 1
$$

#### Przykład 2
Obliczmy granicę $\lim_{x \to \infty} \frac{x}{e^x}$:

$$
\lim_{x \to \infty} \frac{x}{e^x} = \lim_{x \to \infty} \frac{1}{e^x} = 0
$$

#### Przykład 3
Obliczmy granicę $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$:

$$
\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x} = \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}
$$

## Wzór Taylora

Wzór Taylora pozwala przybliżyć funkcję w otoczeniu punktu za pomocą wielomianu.

Jeśli funkcja $f$ ma pochodne rzędu $n+1$ w otoczeniu punktu $a$, to dla dowolnego $x$ z tego otoczenia:

$$
f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \ldots + \frac{f^{(n)}(a)}{n!}(x-a)^n + R_n(x)
$$

gdzie $R_n(x)$ jest resztą (błędem przybliżenia), która może być wyrażona w postaci:

$$
R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}
$$

dla pewnego $\xi$ między $a$ i $x$ (postać Lagrange'a reszty).

### Wzór Maclaurina

Szczególnym przypadkiem wzoru Taylora jest wzór Maclaurina, gdy $a = 0$:

$$
f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \ldots + \frac{f^{(n)}(0)}{n!}x^n + R_n(x)
$$

### Rozwinięcia Maclaurina ważnych funkcji

1. $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \ldots + \frac{x^n}{n!} + \ldots$
2. $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \ldots + (-1)^n\frac{x^{2n+1}}{(2n+1)!} + \ldots$
3. $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \ldots + (-1)^n\frac{x^{2n}}{(2n)!} + \ldots$
4. $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \ldots + (-1)^{n-1}\frac{x^n}{n} + \ldots$ dla $|x| < 1$
5. $(1+x)^{\alpha} = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \frac{\alpha(\alpha-1)(\alpha-2)}{3!}x^3 + \ldots$ dla $|x| < 1$

### Zastosowania szeregów Taylora

Szeregi Taylora mają liczne zastosowania:
- Przybliżanie wartości funkcji
- Przybliżone obliczanie całek
- Rozwiązywanie równań różniczkowych
- Analiza asymptotyczna
- Analiza błędów numerycznych

## Ekstrema funkcji

### Definicje ekstremów

- **Ekstremum lokalne** - punkt, w którym funkcja osiąga wartość maksymalną lub minimalną w pewnym otoczeniu tego punktu
- **Maksimum lokalne** - punkt $x_0$, dla którego istnieje takie otoczenie $U(x_0)$, że dla każdego $x \in U(x_0)$ zachodzi $f(x) \leq f(x_0)$
- **Minimum lokalne** - punkt $x_0$, dla którego istnieje takie otoczenie $U(x_0)$, że dla każdego $x \in U(x_0)$ zachodzi $f(x) \geq f(x_0)$
- **Ekstremum globalne** (absolutne) - punkt, w którym funkcja osiąga wartość maksymalną lub minimalną na całej dziedzinie

### Warunki konieczne istnienia ekstremum

Jeśli funkcja $f$ ma ekstremum lokalne w punkcie $x_0$ i jest różniczkowalna w tym punkcie, to:

$$
f'(x_0) = 0
$$

Punkty, w których $f'(x) = 0$ lub $f'(x)$ nie istnieje, nazywamy **punktami krytycznymi** funkcji $f$.

### Warunki wystarczające istnienia ekstremum

#### Warunek pierwszej pochodnej

Jeśli funkcja $f$ jest ciągła w otoczeniu punktu krytycznego $x_0$ i:
- $f'(x) > 0$ dla $x < x_0$ oraz $f'(x) < 0$ dla $x > x_0$, to $f$ ma maksimum lokalne w $x_0$
- $f'(x) < 0$ dla $x < x_0$ oraz $f'(x) > 0$ dla $x > x_0$, to $f$ ma minimum lokalne w $x_0$

#### Warunek drugiej pochodnej

Jeśli $f'(x_0) = 0$ i $f''(x_0)$ istnieje, to:
- Jeśli $f''(x_0) < 0$, to $f$ ma maksimum lokalne w $x_0$
- Jeśli $f''(x_0) > 0$, to $f$ ma minimum lokalne w $x_0$
- Jeśli $f''(x_0) = 0$, test jest nierozstrzygający i należy stosować inne metody

### Znajdowanie ekstremów globalnych

Aby znaleźć ekstrema globalne funkcji ciągłej $f$ na przedziale $[a, b]$, należy:
1. Znaleźć wszystkie punkty krytyczne funkcji $f$ w przedziale $(a, b)$
2. Obliczyć wartości funkcji $f$ we wszystkich punktach krytycznych oraz na końcach przedziału
3. Największa z tych wartości to maksimum globalne, a najmniejsza to minimum globalne

## Wklęsłość i wypukłość funkcji

### Definicje wypukłości i wklęsłości

- Funkcja $f$ jest **wypukła** na przedziale $(a, b)$, jeśli dla dowolnych $x_1, x_2 \in (a, b)$ i każdego $\lambda \in (0, 1)$ zachodzi:
$$
f(\lambda x_1 + (1-\lambda)x_2) \leq \lambda f(x_1) + (1-\lambda)f(x_2)
$$

- Funkcja $f$ jest **wklęsła** na przedziale $(a, b)$, jeśli dla dowolnych $x_1, x_2 \in (a, b)$ i każdego $\lambda \in (0, 1)$ zachodzi:
$$
f(\lambda x_1 + (1-\lambda)x_2) \geq \lambda f(x_1) + (1-\lambda)f(x_2)
$$

### Badanie wypukłości i wklęsłości za pomocą pochodnych

- Funkcja $f$ jest wypukła na przedziale $(a, b)$, gdy $f''(x) \geq 0$ dla wszystkich $x \in (a, b)$
- Funkcja $f$ jest wklęsła na przedziale $(a, b)$, gdy $f''(x) \leq 0$ dla wszystkich $x \in (a, b)$

### Punkty przegięcia

Punkt przegięcia to punkt $(x_0, f(x_0))$, w którym funkcja zmienia charakter z wypukłej na wklęsłą lub odwrotnie.

Warunki konieczne istnienia punktu przegięcia:
1. $f''(x_0) = 0$ lub $f''(x_0)$ nie istnieje
2. $f''(x)$ zmienia znak w otoczeniu punktu $x_0$

## Zadania z rozwiązaniami

### Zadanie 1: Obliczanie pochodnych funkcji elementarnych

Obliczyć pochodne następujących funkcji:

a) $f(x) = 2x^3 - 4x^2 + 3x - 5$

b) $g(x) = \frac{x^2-1}{x+2}$

c) $h(x) = \sqrt{x^2+1}$

d) $j(x) = \sin^2(x) \cdot \cos(x)$


#### Rozwiązanie:

a) $f(x) = 2x^3 - 4x^2 + 3x - 5$
$$
f'(x) = 6x^2 - 8x + 3
$$

b) $g(x) = \frac{x^2-1}{x+2}$

Stosujemy regułę ilorazu:
$$
g'(x) = \frac{(2x)(x+2) - (x^2-1)(1)}{(x+2)^2}
$$
$$
g'(x) = \frac{2x^2+4x - x^2+1}{(x+2)^2}
$$
$$
g'(x) = \frac{x^2+4x+1}{(x+2)^2}
$$

c) $h(x) = \sqrt{x^2+1} = (x^2+1)^{1/2}$

Stosujemy regułę łańcuchową:
$$
h'(x) = \frac{1}{2}(x^2+1)^{-1/2} \cdot (2x)
$$
$$
h'(x) = \frac{x}{\sqrt{x^2+1}}
$$

d) $j(x) = \sin^2(x) \cdot \cos(x)$

Stosujemy regułę iloczynu:
$$
j'(x) = 2\sin(x)\cos(x) \cdot \cos(x) + \sin^2(x) \cdot (-\sin(x))
$$
$$
j'(x) = 2\sin(x)\cos^2(x) - \sin^3(x)
$$
$$
j'(x) = \sin(x)(2\cos^2(x) - \sin^2(x))
$$
Korzystając z tożsamości $\sin^2(x) + \cos^2(x) = 1$:
$$
j'(x) = \sin(x)(2\cos^2(x) - (1-\cos^2(x)))
$$
$$
j'(x) = \sin(x)(3\cos^2(x) - 1)
$$

### Zadanie 2: Obliczanie pochodnych funkcji złożonych

Obliczyć pochodne następujących funkcji:

a) $f(x) = e^{3x^2-1}$

b) $g(x) = \ln(\tan(x))$

c) $h(x) = \arcsin(2x-1)$

d) $j(x) = \cos^3(\ln(x))$

#### Rozwiązanie:

a) $f(x) = e^{3x^2-1}$

Stosujemy regułę łańcuchową:
$$
f'(x) = e^{3x^2-1} \cdot \frac{d}{dx}(3x^2-1)
$$
$$
f'(x) = e^{3x^2-1} \cdot 6x
$$
$$
f'(x) = 6x \cdot e^{3x^2-1}
$$

b) $g(x) = \ln(\tan(x))$

Stosujemy regułę łańcuchową:
$$
g'(x) = \frac{1}{\tan(x)} \cdot \frac{d}{dx}(\tan(x))
$$
$$
g'(x) = \frac{1}{\tan(x)} \cdot \frac{1}{\cos^2(x)}
$$
$$
g'(x) = \frac{1}{\tan(x) \cdot \cos^2(x)}
$$
Korzystając z tożsamości $\tan(x) = \frac{\sin(x)}{\cos(x)}$:
$$
g'(x) = \frac{\cos(x)}{\sin(x) \cdot \cos^2(x)} = \frac{1}{\sin(x) \cdot \cos(x)} = \frac{1}{\sin(x)\cos(x)}
$$

c) $h(x) = \arcsin(2x-1)$

Stosujemy regułę łańcuchową:
$$
h'(x) = \frac{1}{\sqrt{1-(2x-1)^2}} \cdot \frac{d}{dx}(2x-1)
$$
$$
h'(x) = \frac{1}{\sqrt{1-(2x-1)^2}} \cdot 2
$$
$$
h'(x) = \frac{2}{\sqrt{1-(2x-1)^2}} = \frac{2}{\sqrt{1-4x^2+4x-1}} = \frac{2}{\sqrt{4x-4x^2}} = \frac{2}{\sqrt{4x(1-x)}} = \frac{1}{\sqrt{x(1-x)}}
$$

d) $j(x) = \cos^3(\ln(x))$

Stosujemy regułę łańcuchową:
$$
j'(x) = 3\cos^2(\ln(x)) \cdot \frac{d}{dx}(\cos(\ln(x)))
$$
$$
j'(x) = 3\cos^2(\ln(x)) \cdot (-\sin(\ln(x))) \cdot \frac{d}{dx}(\ln(x))
$$
$$
j'(x) = 3\cos^2(\ln(x)) \cdot (-\sin(\ln(x))) \cdot \frac{1}{x}
$$
$$
j'(x) = -\frac{3\cos^2(\ln(x))\sin(\ln(x))}{x}
$$

### Zadanie 3: Badanie monotoniczności i ekstremów funkcji

Zbadać monotoniczność i ekstrema lokalne funkcji $f(x) = 2x^3 - 3x^2 - 12x + 7$.

#### Rozwiązanie:

Obliczamy pochodną:
$$
f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2)
$$

Rozwiązujemy równanie $f'(x) = 0$:
$$
6(x^2 - x - 2) = 0
$$
$$
x^2 - x - 2 = 0
$$

Korzystając z wzoru na pierwiastki równania kwadratowego:
$$
x = \frac{1 \pm \sqrt{1 + 8}}{2} = \frac{1 \pm 3}{2}
$$

Zatem $x_1 = -1$ i $x_2 = 2$ są punktami krytycznymi.

Obliczamy drugą pochodną:
$$
f''(x) = 12x - 6
$$

W punktach krytycznych:
- $f''(-1) = 12 \cdot (-1) - 6 = -18 < 0$, więc $x = -1$ to maksimum lokalne
- $f''(2) = 12 \cdot 2 - 6 = 18 > 0$, więc $x = 2$ to minimum lokalne

Wartości funkcji w punktach krytycznych:
- $f(-1) = 2(-1)^3 - 3(-1)^2 - 12(-1) + 7 = -2 - 3 + 12 + 7 = 14$
- $f(2) = 2(2)^3 - 3(2)^2 - 12(2) + 7 = 16 - 12 - 24 + 7 = -13$

Badamy znak pochodnej:
- Dla $x < -1$: $f'(x) > 0$, funkcja jest rosnąca
- Dla $-1 < x < 2$: $f'(x) < 0$, funkcja jest malejąca
- Dla $x > 2$: $f'(x) > 0$, funkcja jest rosnąca

Zatem funkcja ma maksimum lokalne równe 14 w punkcie $x = -1$ i minimum lokalne równe -13 w punkcie $x = 2$.

### Zadanie 4: Badanie wypukłości i punktów przegięcia

Zbadać wypukłość i punkty przegięcia funkcji $f(x) = x^4 - 8x^3 + 18x^2 - 5$.

#### Rozwiązanie:

Obliczamy pochodne:
$$
f'(x) = 4x^3 - 24x^2 + 36x
$$
$$
f''(x) = 12x^2 - 48x + 36 = 12(x^2 - 4x + 3)
$$

Rozwiązujemy równanie $f''(x) = 0$:
$$
12(x^2 - 4x + 3) = 0
$$
$$
x^2 - 4x + 3 = 0
$$

Korzystając z wzoru na pierwiastki równania kwadratowego:
$$
x = \frac{4 \pm \sqrt{16 - 12}}{2} = \frac{4 \pm 2}{2}
$$

Zatem $x_1 = 1$ i $x_2 = 3$ są punktami, w których druga pochodna wynosi zero.

Badamy znak drugiej pochodnej:
- Dla $x < 1$: $f''(x) > 0$, funkcja jest wypukła
- Dla $1 < x < 3$: $f''(x) < 0$, funkcja jest wklęsła
- Dla $x > 3$: $f''(x) > 0$, funkcja jest wypukła

Zatem w punktach $x = 1$ i $x = 3$ funkcja ma punkty przegięcia.

Wartości funkcji w punktach przegięcia:
- $f(1) = 1^4 - 8 \cdot 1^3 + 18 \cdot 1^2 - 5 = 1 - 8 + 18 - 5 = 6$
- $f(3) = 3^4 - 8 \cdot 3^3 + 18 \cdot 3^2 - 5 = 81 - 216 + 162 - 5 = 22$

Punkty przegięcia to $(1, 6)$ i $(3, 22)$.

### Zadanie 5: Zastosowanie reguły de l'Hospitala

Obliczyć następujące granice:

a) $\lim_{x \to 0} \frac{\sin(3x)}{x}$

b) $\lim_{x \to 0} \frac{e^x - 1 - x - \frac{x^2}{2}}{x^3}$

c) $\lim_{x \to 1} \frac{\ln(x)}{x-1}$

d) $\lim_{x \to \infty} x \cdot \sin\left(\frac{1}{x}\right)$

#### Rozwiązanie:

a) $\lim_{x \to 0} \frac{\sin(3x)}{x}$

Podstawiając $x = 0$, otrzymujemy symbol nieoznaczony $\frac{0}{0}$, więc stosujemy regułę de l'Hospitala:

$$
\lim_{x \to 0} \frac{\sin(3x)}{x} = \lim_{x \to 0} \frac{3\cos(3x)}{1} = 3\cos(0) = 3
$$

b) $\lim_{x \to 0} \frac{e^x - 1 - x - \frac{x^2}{2}}{x^3}$

Podstawiając $x = 0$, otrzymujemy symbol nieoznaczony $\frac{0}{0}$, więc stosujemy regułę de l'Hospitala:

$$
\lim_{x \to 0} \frac{e^x - 1 - x - \frac{x^2}{2}}{x^3} = \lim_{x \to 0} \frac{e^x - 1 - x}{3x^2} = \lim_{x \to 0} \frac{e^x - 1}{6x} = \lim_{x \to 0} \frac{e^x}{6} = \frac{1}{6}
$$

c) $\lim_{x \to 1} \frac{\ln(x)}{x-1}$

Podstawiając $x = 1$, otrzymujemy symbol nieoznaczony $\frac{0}{0}$, więc stosujemy regułę de l'Hospitala:

$$
\lim_{x \to 1} \frac{\ln(x)}{x-1} = \lim_{x \to 1} \frac{\frac{1}{x}}{1} = \lim_{x \to 1} \frac{1}{x} = 1
$$

d) $\lim_{x \to \infty} x \cdot \sin\left(\frac{1}{x}\right)$

Dla tej granicy wprowadzamy podstawienie $t = \frac{1}{x}$. Gdy $x \to \infty$, to $t \to 0$:

$$
\lim_{x \to \infty} x \cdot \sin\left(\frac{1}{x}\right) = \lim_{t \to 0} \frac{\sin(t)}{t} = 1
$$

Skorzystaliśmy z faktu, że $\lim_{t \to 0} \frac{\sin(t)}{t} = 1$.

### Zadanie 6: Optymalizacja - zadanie geometryczne

Znaleźć wymiary prostokąta o największym polu, jeśli jego obwód wynosi 20 cm.

#### Rozwiązanie:

Niech $a$ i $b$ będą długościami boków prostokąta.
Z warunków zadania:
- Obwód: $2a + 2b = 20$, więc $b = 10 - a$
- Pole: $P(a) = a \cdot b = a(10 - a) = 10a - a^2$

Aby znaleźć maksimum funkcji $P(a)$, obliczamy pochodną:
$$
P'(a) = 10 - 2a
$$

Rozwiązujemy równanie $P'(a) = 0$:
$$
10 - 2a = 0
$$
$$
a = 5
$$

Sprawdzamy drugą pochodną:
$$
P''(a) = -2 < 0
$$

Ponieważ $P''(5) < 0$, w punkcie $a = 5$ funkcja osiąga maksimum.

Zatem $a = 5$ i $b = 10 - 5 = 5$.

Odpowiedź: Prostokąt o bokach 5 cm i 5 cm (czyli kwadrat) ma największe pole przy obwodzie 20 cm.

### Zadanie 7: Zastosowanie pochodnej w fizyce

Ciało porusza się ruchem prostoliniowym, a jego położenie (w metrach) w funkcji czasu $t$ jest dane wzorem $s(t) = t^3 - 6t^2 + 9t + 1$ dla $t \geq 0$. Znaleźć:

a) Prędkość ciała w chwili $t = 2$

b) Przyspieszenie ciała w chwili $t = 2$

c) Chwile, w których ciało zmienia kierunek ruchu

d) Chwilę, w której ciało osiąga maksymalną prędkość

#### Rozwiązanie:

a) Prędkość ciała to pochodna funkcji położenia:
$$
v(t) = s'(t) = 3t^2 - 12t + 9
$$
Prędkość w chwili $t = 2$:
$$
v(2) = 3 \cdot 2^2 - 12 \cdot 2 + 9 = 12 - 24 + 9 = -3 \text{ m/s}
$$
Ujemna wartość prędkości oznacza, że ciało porusza się w kierunku przeciwnym do przyjętego kierunku dodatniego.

b) Przyspieszenie ciała to pochodna funkcji prędkości:
$$
a(t) = v'(t) = 6t - 12
$$
Przyspieszenie w chwili $t = 2$:
$$
a(2) = 6 \cdot 2 - 12 = 12 - 12 = 0 \text{ m/s}^2
$$

c) Ciało zmienia kierunek ruchu w chwilach, gdy prędkość wynosi zero:
$$
v(t) = 3t^2 - 12t + 9 = 0
$$
$$
3(t^2 - 4t + 3) = 0
$$
$$
t^2 - 4t + 3 = 0
$$

Korzystając z wzoru na pierwiastki równania kwadratowego:
$$
t = \frac{4 \pm \sqrt{16 - 12}}{2} = \frac{4 \pm 2}{2}
$$

Zatem $t_1 = 1$ i $t_2 = 3$ są chwilami, w których ciało zmienia kierunek ruchu.

d) Maksymalną prędkość ciało osiąga w chwili, gdy przyspieszenie wynosi zero:
$$
a(t) = 6t - 12 = 0
$$
$$
t = 2
$$

Aby potwierdzić, że to maksimum (a nie minimum) prędkości, sprawdzamy znak drugiej pochodnej:
$$
a'(t) = 6 > 0
$$

Ponieważ $a'(t) > 0$, w chwili $t = 2$ ciało osiąga minimalną (a nie maksymalną) prędkość.

Z analizy punktów c) wiemy, że prędkość jest równa zero dla $t = 1$ i $t = 3$, a dla $t = 2$ jest ujemna. Zatem dla $t < 1$ i $t > 3$ prędkość jest dodatnia.

Aby znaleźć chwilę maksymalnej prędkości, musimy zbadać zachowanie funkcji $v(t)$ dla $t \geq 0$.
Ponieważ $\lim_{t \to \infty} v(t) = \infty$ (dominujący składnik $3t^2$), maksymalna prędkość nie jest osiągana w skończonym czasie dla $t > 3$.

Dla $t \in [0, 1]$ znajdujemy maksimum funkcji $v(t)$ badając jej wartość na końcach przedziału:
$$
v(0) = 9
$$
$$
v(1) = 0
$$

Zatem maksymalna prędkość wynosi 9 m/s i jest osiągana w chwili $t = 0$.

### Zadanie 8: Przybliżanie funkcji wielomianem Taylora

Wyznaczyć wielomian Taylora trzeciego stopnia dla funkcji $f(x) = e^x$ w otoczeniu punktu $x_0 = 0$ oraz oszacować błąd przybliżenia funkcji $e^x$ tym wielomianem w przedziale $[-0.5, 0.5]$.

#### Rozwiązanie:

Wielomian Taylora trzeciego stopnia dla funkcji $f(x)$ w otoczeniu punktu $x_0$ ma postać:

$$
P_3(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \frac{f^{(3)}(x_0)}{3!}(x-x_0)^3
$$

Obliczamy pochodne funkcji $f(x) = e^x$:
$$
f(x) = e^x
$$
$$
f'(x) = e^x
$$
$$
f''(x) = e^x
$$
$$
f^{(3)}(x) = e^x
$$

Wartości pochodnych w punkcie $x_0 = 0$:
$$
f(0) = e^0 = 1
$$
$$
f'(0) = e^0 = 1
$$
$$
f''(0) = e^0 = 1
$$
$$
f^{(3)}(0) = e^0 = 1
$$

Zatem wielomian Taylora trzeciego stopnia dla funkcji $e^x$ w otoczeniu punktu $x_0 = 0$ wynosi:

$$
P_3(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}
$$

Błąd przybliżenia można oszacować za pomocą wzoru na resztę Lagrange'a:

$$
R_3(x) = \frac{f^{(4)}(\xi)}{4!}x^4
$$

gdzie $\xi$ leży między 0 a $x$.

Ponieważ $f^{(4)}(x) = e^x$, dla $x \in [-0.5, 0.5]$ mamy:

- Dla $x \in [0, 0.5]$: $f^{(4)}(\xi) = e^{\xi} \leq e^{0.5} \approx 1.6487$
- Dla $x \in [-0.5, 0]$: $f^{(4)}(\xi) = e^{\xi} \leq e^{0} = 1$

Zatem maksymalna wartość $f^{(4)}(\xi)$ w przedziale $[-0.5, 0.5]$ wynosi około 1.6487.
Maksymalny błąd przybliżenia:

$$
|R_3(x)| \leq \frac{1.6487}{24} \cdot 0.5^4 \approx 0.0086
$$

Odpowiedź: Wielomian Taylora trzeciego stopnia dla funkcji $e^x$ w otoczeniu punktu $x_0 = 0$ wynosi $P_3(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}$, a błąd przybliżenia w przedziale $[-0.5, 0.5]$ nie przekracza 0.0086.

### Zadanie 9: Obliczanie pochodnej funkcji uwikłanej

Dana jest funkcja uwikłana określona równaniem $x^3 + 2xy + y^3 = 6$. Obliczyć wartość pochodnej $\frac{dy}{dx}$ w punkcie $(1, 1)$.

#### Rozwiązanie:

Aby obliczyć pochodną funkcji uwikłanej, różniczkujemy dane równanie względem $x$, traktując $y$ jako funkcję $x$:

$$
3x^2 + 2y + 2x \cdot \frac{dy}{dx} + 3y^2 \cdot \frac{dy}{dx} = 0
$$

Przekształcamy, aby wyrazić $\frac{dy}{dx}$:

$$
\frac{dy}{dx} = -\frac{3x^2 + 2y}{2x + 3y^2}
$$

Obliczamy wartość pochodnej w punkcie $(1, 1)$:

$$
\frac{dy}{dx}|_{(1,1)} = -\frac{3 \cdot 1^2 + 2 \cdot 1}{2 \cdot 1 + 3 \cdot 1^2} = -\frac{3 + 2}{2 + 3} = -\frac{5}{5} = -1
$$

Odpowiedź: Wartość pochodnej $\frac{dy}{dx}$ w punkcie $(1, 1)$ wynosi $-1$.

### Zadanie 10: Zastosowanie pochodnych w ekonomii

Funkcja kosztu całkowitego produkcji pewnego towaru dana jest wzorem $C(x) = x^3 - 6x^2 + 15x + 10$, gdzie $x$ oznacza liczbę wyprodukowanych jednostek towaru.

a) Wyznacz funkcję kosztu krańcowego.

b) Znajdź poziom produkcji, przy którym koszt krańcowy osiąga wartość minimalną, jeśli taki istnieje.

c) Sprawdź, czy funkcja kosztu całkowitego jest wypukła i dla jakich wartości $x$.

#### Rozwiązanie:

a) Aby znaleźć koszt krańcowy, obliczamy pochodną funkcji kosztu całkowitego:

$$
C'(x) = \frac{dC}{dx} = 3x^2 - 12x + 15
$$

Koszt krańcowy reprezentuje zmianę kosztu całkowitego przy zwiększeniu produkcji o jednostkę.

b) Aby znaleźć poziom produkcji, przy którym koszt krańcowy osiąga wartość minimalną, obliczamy drugą pochodną i przyrównujemy pierwszą pochodną do zera:

$$
C''(x) = \frac{d^2C}{dx^2} = 6x - 12
$$

Przyrównujemy pierwszą pochodną do zera:
$$
C'(x) = 3x^2 - 12x + 15 = 0
$$

Rozwiązujemy równanie kwadratowe:
$$
3x^2 - 12x + 15 = 0
$$
$$
x^2 - 4x + 5 = 0
$$

Wyznaczamy deltę:
$$
\Delta = (-4)^2 - 4 \cdot 1 \cdot 5 = 16 - 20 = -4
$$

Ponieważ delta jest ujemna, równanie nie ma rozwiązań rzeczywistych, co oznacza, że funkcja kosztu krańcowego nie ma ekstremum lokalnego.

c) Aby sprawdzić, czy funkcja kosztu całkowitego jest wypukła, analizujemy drugą pochodną:
$$
C''(x) = 6x - 12
$$

Funkcja kosztu jest wypukła dla $x > 2$ (gdy druga pochodna jest dodatnia), a wklęsła dla $x < 2$ (gdy druga pochodna jest ujemna).

Odpowiedź: 

a) Koszt krańcowy wynosi $C'(x) = 3x^2 - 12x + 15$.

b) Funkcja kosztu krańcowego nie ma wartości minimalnej.

c) Funkcja kosztu całkowitego jest wypukła dla $x > 2$. 