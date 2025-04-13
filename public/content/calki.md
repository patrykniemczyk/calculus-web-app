## Spis treści:
1. [Wprowadzenie do całek](#wprowadzenie-do-całek)
2. [Całka nieoznaczona](#całka-nieoznaczona)
3. [Podstawowe wzory całkowania](#podstawowe-wzory-całkowania)
4. [Metody całkowania](#metody-całkowania)
5. [Całkowanie funkcji wymiernych](#całkowanie-funkcji-wymiernych)
6. [Całkowanie funkcji niewymiernych](#całkowanie-funkcji-niewymiernych)
7. [Całkowanie funkcji trygonometrycznych](#całkowanie-funkcji-trygonometrycznych)
8. [Całka oznaczona](#całka-oznaczona)
9. [Geometryczne interpretacje całki oznaczonej](#geometryczne-interpretacje-całki-oznaczonej)
10. [Całki niewłaściwe](#całki-niewłaściwe)
11. [Zastosowania całek](#zastosowania-całek)
12. [Całki podwójne i wielokrotne](#całki-podwójne-i-wielokrotne)
13. [Całki krzywoliniowe](#całki-krzywoliniowe)
14. [Całki powierzchniowe](#całki-powierzchniowe)
15. [Twierdzenia całkowe analizy wektorowej](#twierdzenia-całkowe-analizy-wektorowej)
16. [Zadania z rozwiązaniami](#zadania-z-rozwiązaniami)

## Wprowadzenie do całek

Całkowanie jest działaniem odwrotnym do różniczkowania. Jeśli pochodna funkcji $F(x)$ jest równa $f(x)$, to funkcję $F(x)$ nazywamy całką nieoznaczoną funkcji $f(x)$ i zapisujemy:

$$
\int f(x)\,dx = F(x) + C
$$

gdzie $C$ jest stałą całkowania.

Całka nieoznaczona reprezentuje rodzinę funkcji pierwotnych, różniących się o stałą. Natomiast całka oznaczona $\int_a^b f(x)\,dx$ przedstawia dokładnie określoną wartość liczbową, która w interpretacji geometrycznej odpowiada polu obszaru ograniczonego wykresem funkcji $f(x)$, osią OX oraz prostymi $x=a$ i $x=b$.

## Całka nieoznaczona

Całka nieoznaczona $\int f(x)\,dx$ funkcji $f(x)$ to rodzina funkcji $F(x) + C$, gdzie $F'(x) = f(x)$ i $C$ jest dowolną stałą.

### Podstawowe własności całki nieoznaczonej

1. $\int k \cdot f(x)\,dx = k \cdot \int f(x)\,dx$, gdzie $k$ jest stałą.
2. $\int [f(x) \pm g(x)]\,dx = \int f(x)\,dx \pm \int g(x)\,dx$
3. $\frac{d}{dx}\left(\int f(x)\,dx\right) = f(x)$
4. $\int f'(x)\,dx = f(x) + C$

### Całkowanie przez podstawienie

Niech $u = g(x)$ będzie podstawieniem, które prowadzi do $dx = g'(x)\,du$. Wówczas:

$$
\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du
$$

### Całkowanie przez części

Wzór na całkowanie przez części:

$$
\int u(x) \cdot v'(x)\,dx = u(x) \cdot v(x) - \int v(x) \cdot u'(x)\,dx
$$

Jest to odpowiednik reguły na pochodną iloczynu funkcji. Często zapisuje się go w formie:

$$
\int u\,dv = u \cdot v - \int v\,du
$$

gdzie $dv = v'(x)\,dx$ i $du = u'(x)\,dx$.

## Podstawowe wzory całkowania

### Całki funkcji elementarnych

1. $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$, dla $n \neq -1$
2. $\int \frac{1}{x}\,dx = \ln|x| + C$
3. $\int e^x\,dx = e^x + C$
4. $\int a^x\,dx = \frac{a^x}{\ln a} + C$, dla $a > 0$, $a \neq 1$
5. $\int \sin x\,dx = -\cos x + C$
6. $\int \cos x\,dx = \sin x + C$
7. $\int \tan x\,dx = -\ln|\cos x| + C = \ln|\sec x| + C$
8. $\int \cot x\,dx = \ln|\sin x| + C$
9. $\int \sec x\,dx = \ln|\sec x + \tan x| + C$
10. $\int \csc x\,dx = \ln|\csc x - \cot x| + C$

### Całki funkcji złożonych

1. $\int \frac{1}{a^2 + x^2}\,dx = \frac{1}{a} \cdot \arctan\frac{x}{a} + C$
2. $\int \frac{1}{\sqrt{a^2 - x^2}}\,dx = \arcsin\frac{x}{a} + C$
3. $\int \frac{1}{x\sqrt{x^2-a^2}}\,dx = \frac{1}{a} \cdot \text{arcsec}\frac{x}{a} + C$
4. $\int \sqrt{a^2 - x^2}\,dx = \frac{x\sqrt{a^2-x^2}}{2} + \frac{a^2}{2} \cdot \arcsin\frac{x}{a} + C$
5. $\int \sqrt{x^2 + a^2}\,dx = \frac{x\sqrt{x^2+a^2}}{2} + \frac{a^2}{2} \cdot \ln(x + \sqrt{x^2+a^2}) + C$
6. $\int \sqrt{x^2 - a^2}\,dx = \frac{x\sqrt{x^2-a^2}}{2} - \frac{a^2}{2} \cdot \ln|x + \sqrt{x^2-a^2}| + C$

## Metody całkowania

### Całkowanie przez podstawienie

Metoda ta polega na zastosowaniu odpowiedniego podstawienia, aby uprościć całkę.

#### Przykład
Obliczmy $\int \sin(3x+2)\,dx$

Zastosujmy podstawienie $u = 3x+2$, wówczas $dx = \frac{du}{3}$

$$
\int \sin(3x+2)\,dx = \int \sin u \cdot \frac{du}{3} = \frac{1}{3} \int \sin u\,du = \frac{1}{3} \cdot (-\cos u) + C = -\frac{1}{3} \cos(3x+2) + C
$$

### Całkowanie przez części

Dla funkcji, które można przedstawić jako iloczyn dwóch funkcji, często skuteczna jest metoda całkowania przez części.

#### Przykład
Obliczmy $\int x \cdot e^x\,dx$

Zastosujmy wzór $\int u\,dv = u \cdot v - \int v\,du$, przyjmując $u = x$ i $dv = e^x\,dx$

Wówczas $du = dx$ i $v = e^x$

$$
\int x \cdot e^x\,dx = x \cdot e^x - \int e^x\,dx = x \cdot e^x - e^x + C = e^x (x - 1) + C
$$

### Całkowanie wyrażeń zawierających pierwiastki kwadratowe

Często pomocne są podstawienia trygonometryczne:

1. Dla wyrażeń zawierających $\sqrt{a^2 - x^2}$: $x = a\sin t$
2. Dla wyrażeń zawierających $\sqrt{a^2 + x^2}$: $x = a\tan t$
3. Dla wyrażeń zawierających $\sqrt{x^2 - a^2}$: $x = a\sec t$

#### Przykład
Obliczmy $\int \frac{dx}{\sqrt{4-x^2}}$

Zastosujmy podstawienie $x = 2\sin t$, wówczas $dx = 2\cos t\,dt$ i $\sqrt{4-x^2} = \sqrt{4-4\sin^2 t} = 2\cos t$

$$
\int \frac{dx}{\sqrt{4-x^2}} = \int \frac{2\cos t\,dt}{2\cos t} = \int dt = t + C = \arcsin\frac{x}{2} + C
$$

## Całkowanie funkcji wymiernych

Funkcja wymierna to iloraz dwóch wielomianów. Aby całkować takie funkcje, najczęściej stosuje się metodę rozkładu na ułamki proste.

### Rozkład na ułamki proste

Każdą funkcję wymierną $\frac{P(x)}{Q(x)}$, gdzie stopień $P$ jest mniejszy od stopnia $Q$, można przedstawić jako sumę ułamków prostych typu:
- $\frac{A}{(x-a)^k}$, gdzie $x-a$ jest czynnikiem wielomianu $Q(x)$
- $\frac{Bx+C}{(x^2+px+q)^m}$, gdzie $x^2+px+q$ jest nierozkładalnym czynnikiem kwadratowym wielomianu $Q(x)$

#### Przykład
Obliczmy $\int \frac{3x+5}{x^2-4}\,dx$

Rozkładamy mianownik: $x^2-4 = (x-2)(x+2)$

Funkcję można zapisać jako:
$$
\frac{3x+5}{x^2-4} = \frac{A}{x-2} + \frac{B}{x+2}
$$

Sprowadzamy do wspólnego mianownika i porównujemy liczniki:
$$
3x+5 = A(x+2) + B(x-2)
$$

Podstawiając $x=2$: $3 \cdot 2 + 5 = A \cdot 4 \Rightarrow A = \frac{11}{4}$

Podstawiając $x=-2$: $3 \cdot (-2) + 5 = B \cdot (-4) \Rightarrow B = -\frac{1}{4}$

Zatem:
$$
\int \frac{3x+5}{x^2-4}\,dx = \frac{11}{4} \int \frac{dx}{x-2} - \frac{1}{4} \int \frac{dx}{x+2} = \frac{11}{4} \ln|x-2| - \frac{1}{4} \ln|x+2| + C
$$

## Całkowanie funkcji niewymiernych

Funkcje niewymierne to funkcje zawierające wyrażenia z pierwiastkami lub ułamkowymi potęgami zmiennej.

### Podstawienia dla funkcji niewymiernych

1. Dla wyrażeń zawierających $\sqrt[n]{ax+b}$, stosuje się podstawienie $u = \sqrt[n]{ax+b}$, co daje $x = \frac{u^n-b}{a}$
2. Dla wyrażeń typu $\frac{P(x)}{\sqrt{ax^2+bx+c}}$, stosuje się podstawienia trygonometryczne lub substytucję Eulera.

#### Przykład
Obliczmy $\int \frac{dx}{\sqrt{x}(1+x)}$

Zastosujmy podstawienie $u = \sqrt{x}$, wówczas $x = u^2$ i $dx = 2u\,du$

$$
\int \frac{dx}{\sqrt{x}(1+x)} = \int \frac{2u\,du}{u(1+u^2)} = 2\int \frac{du}{1+u^2} = 2\arctan u + C = 2\arctan\sqrt{x} + C
$$

## Całkowanie funkcji trygonometrycznych

### Całki funkcji trygonometrycznych

1. $\int \sin^2 x\,dx = \frac{x}{2} - \frac{\sin 2x}{4} + C$
2. $\int \cos^2 x\,dx = \frac{x}{2} + \frac{\sin 2x}{4} + C$
3. $\int \tan^2 x\,dx = \tan x - x + C$
4. $\int \sin^n x\,dx$ - dla $n$ nieparzystego stosujemy podstawienie $u = \cos x$, dla $n$ parzystego korzystamy z wzorów redukcyjnych lub tożsamości $\sin^2 x = \frac{1-\cos 2x}{2}$
5. $\int \cos^n x\,dx$ - analogicznie jak dla $\sin^n x$

#### Przykład
Obliczmy $\int \sin^3 x\,dx$

Możemy zapisać:
$$
\sin^3 x = \sin x \cdot \sin^2 x = \sin x \cdot (1-\cos^2 x)
$$

Stosujemy podstawienie $u = \cos x$, wtedy $du = -\sin x\,dx$

$$
\int \sin^3 x\,dx = \int \sin x \cdot (1-\cos^2 x)\,dx = \int (1-u^2) \cdot (-du) = \int (u^2-1)\,du = \frac{u^3}{3} - u + C
$$

$$
= \frac{\cos^3 x}{3} - \cos x + C
$$

### Całki postaci $\int R(\sin x, \cos x)\,dx$

Dla funkcji wymiernych $R$ od $\sin x$ i $\cos x$ często stosuje się podstawienie $t = \tan\frac{x}{2}$, które prowadzi do wyrażeń:

$$
\sin x = \frac{2t}{1+t^2}, \cos x = \frac{1-t^2}{1+t^2}, dx = \frac{2dt}{1+t^2}
$$

To podstawienie zamienia całkę z funkcji trygonometrycznych na całkę z funkcji wymiernej.

## Całka oznaczona

Całka oznaczona funkcji $f$ na przedziale $[a,b]$ jest definiowana jako:

$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x_i
$$

gdzie $\Delta x_i = \frac{b-a}{n}$ i $x_i^*$ jest punktem z przedziału $[x_{i-1}, x_i]$.

### Podstawowe twierdzenie rachunku całkowego

Jeśli funkcja $f$ jest ciągła na przedziale $[a,b]$ oraz $F$ jest jej funkcją pierwotną, to:

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

To twierdzenie, zwane również regułą Newtona-Leibniza, jest podstawowym narzędziem do obliczania całek oznaczonych.

### Własności całki oznaczonej

1. $\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$
2. $\int_a^a f(x)\,dx = 0$
3. $\int_a^b [f(x) \pm g(x)]\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx$
4. $\int_a^b k \cdot f(x)\,dx = k \cdot \int_a^b f(x)\,dx$, gdzie $k$ jest stałą
5. $\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$, gdzie $a \leq c \leq b$
6. Jeśli $f(x) \geq 0$ na $[a,b]$, to $\int_a^b f(x)\,dx \geq 0$
7. Jeśli $f(x) \geq g(x)$ na $[a,b]$, to $\int_a^b f(x)\,dx \geq \int_a^b g(x)\,dx$

#### Przykład
Obliczmy $\int_0^{\pi/2} \sin x\,dx$

Znamy $\int \sin x\,dx = -\cos x + C$

Stosując regułę Newtona-Leibniza:
$$
\int_0^{\pi/2} \sin x\,dx = [-\cos x]_0^{\pi/2} = -\cos(\pi/2) - (-\cos(0)) = -0 - (-1) = 1
$$

### Całkowanie numeryczne

Do przybliżonego obliczania całek oznaczonych stosuje się metody numeryczne, takie jak:

1. **Metoda prostokątów**: $\int_a^b f(x)\,dx \approx \sum_{i=1}^{n} f(x_i) \cdot \Delta x$
2. **Metoda trapezów**: $\int_a^b f(x)\,dx \approx \frac{\Delta x}{2} \cdot [f(a) + 2f(x_1) + 2f(x_2) + ... + 2f(x_{n-1}) + f(b)]$
3. **Metoda Simpsona**: $\int_a^b f(x)\,dx \approx \frac{\Delta x}{3} \cdot [f(a) + 4f(x_1) + 2f(x_2) + 4f(x_3) + ... + 4f(x_{n-1}) + f(b)]$

## Geometryczne interpretacje całki oznaczonej

### Pole obszaru

Dla funkcji $f(x) \geq 0$ na przedziale $[a,b]$, całka $\int_a^b f(x)\,dx$ reprezentuje pole obszaru ograniczonego wykresem funkcji $f$, osią OX oraz prostymi $x=a$ i $x=b$.

Jeśli funkcja przyjmuje również wartości ujemne, to całka oznaczona daje pole algebraiczne - sumę pól nad osią OX minus sumę pól pod osią OX.

### Objętość bryły obrotowej

Objętość bryły powstałej przez obrót obszaru ograniczonego wykresem funkcji $f(x) \geq 0$, osią OX oraz prostymi $x=a$ i $x=b$ wokół osi OX wynosi:

$$
V = \pi \int_a^b [f(x)]^2\,dx
$$

Analogicznie, dla obrotu wokół osi OY:

$$
V = 2\pi \int_a^b x \cdot f(x)\,dx
$$

### Długość łuku krzywej

Długość łuku krzywej określonej funkcją $y = f(x)$ na przedziale $[a,b]$ wynosi:

$$
L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx
$$

Dla krzywej w postaci parametrycznej $x = x(t)$, $y = y(t)$, $t \in [t_1, t_2]$:

$$
L = \int_{t_1}^{t_2} \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt
$$

### Pole powierzchni bryły obrotowej

Pole powierzchni bryły powstałej przez obrót krzywej $y = f(x) \geq 0$ na przedziale $[a,b]$ wokół osi OX wynosi:

$$
S = 2\pi \int_a^b f(x) \cdot \sqrt{1 + [f'(x)]^2}\,dx
$$

## Całki niewłaściwe

Całki niewłaściwe to całki oznaczone, w których co najmniej jeden z warunków standardowej całki oznaczonej nie jest spełniony: przedział całkowania jest nieograniczony lub funkcja podcałkowa ma nieusuwalne osobliwości w przedziale całkowania.

### Całki niewłaściwe pierwszego rodzaju

Całki na nieograniczonych przedziałach:

1. $\int_a^{\infty} f(x)\,dx = \lim_{b \to \infty} \int_a^b f(x)\,dx$

2. $\int_{-\infty}^b f(x)\,dx = \lim_{a \to -\infty} \int_a^b f(x)\,dx$

3. $\int_{-\infty}^{\infty} f(x)\,dx = \int_{-\infty}^c f(x)\,dx + \int_c^{\infty} f(x)\,dx$

gdzie $c$ jest dowolną liczbą rzeczywistą.

#### Przykład
Obliczmy $\int_1^{\infty} \frac{dx}{x^2}$

$$
\int_1^{\infty} \frac{dx}{x^2} = \lim_{b \to \infty} \int_1^b \frac{dx}{x^2} = \lim_{b \to \infty} \left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty} \left(-\frac{1}{b} + 1\right) = 1
$$

### Całki niewłaściwe drugiego rodzaju

Całki funkcji, które mają osobliwości wewnątrz przedziału całkowania:

$$
\int_a^b f(x)\,dx = \lim_{\epsilon \to 0^+} \int_a^{c-\epsilon} f(x)\,dx + \lim_{\delta \to 0^+} \int_{c+\delta}^b f(x)\,dx
$$

gdzie $c \in (a,b)$ jest punktem, w którym funkcja ma osobliwość.

#### Przykład
Obliczmy $\int_0^1 \frac{1}{\sqrt{x}}\,dx$

Funkcja $\frac{1}{\sqrt{x}}$ ma osobliwość w punkcie $x=0$.

$$
\int_0^1 \frac{1}{\sqrt{x}}\,dx = \lim_{\epsilon \to 0^+} \int_{\epsilon}^1 \frac{1}{\sqrt{x}}\,dx = \lim_{\epsilon \to 0^+} \left[2\sqrt{x}\right]_{\epsilon}^1 = \lim_{\epsilon \to 0^+} (2 - 2\sqrt{\epsilon}) = 2
$$

### Kryterium zbieżności całki niewłaściwej

Całka niewłaściwa $\int_a^{\infty} f(x)\,dx$ jest zbieżna, jeśli istnieje skończona granica $\lim_{b \to \infty} \int_a^b f(x)\,dx$. W przeciwnym przypadku całka jest rozbieżna.

Dla funkcji $f(x) \geq 0$ na $[a, \infty)$ można stosować kryterium porównawcze:
- Jeśli $0 \leq f(x) \leq g(x)$ dla $x \geq a$ i całka $\int_a^{\infty} g(x)\,dx$ jest zbieżna, to całka $\int_a^{\infty} f(x)\,dx$ też jest zbieżna.
- Jeśli $0 \leq g(x) \leq f(x)$ dla $x \geq a$ i całka $\int_a^{\infty} g(x)\,dx$ jest rozbieżna, to całka $\int_a^{\infty} f(x)\,dx$ też jest rozbieżna.

## Zastosowania całek

### Zastosowania w fizyce

1. **Praca**: Praca wykonana przez zmienną siłę $F(x)$ działającą wzdłuż osi OX od punktu $a$ do $b$ wynosi:
$$
W = \int_a^b F(x)\,dx
$$

2. **Energia kinetyczna**: Energia kinetyczna punktu materialnego o masie $m$ i prędkości $v$ wynosi:
$$
E_k = \frac{1}{2}mv^2 = \int_0^v mv\,dv
$$

3. **Środek masy**: Dla jednorodnego ciała o gęstości liniowej $\rho(x)$, współrzędna $x$ środka masy wynosi:
$$
x_{cm} = \frac{\int_a^b x \cdot \rho(x)\,dx}{\int_a^b \rho(x)\,dx}
$$

4. **Moment bezwładności**: Moment bezwładności pręta o zmiennej gęstości liniowej $\rho(x)$ względem punktu $O$ wynosi:
$$
I_O = \int_a^b x^2 \cdot \rho(x)\,dx
$$

### Zastosowania w geometrii

1. **Pole powierzchni**: Pole powierzchni obszaru ograniczonego krzywymi $y = f(x)$, $y = g(x)$, $x = a$ i $x = b$, gdzie $f(x) \geq g(x)$ na $[a,b]$, wynosi:
$$
A = \int_a^b [f(x) - g(x)]\,dx
$$

2. **Objętość bryły**: Objętość bryły o przekroju poprzecznym $A(x)$ prostopadłym do osi OX wynosi:
$$
V = \int_a^b A(x)\,dx
$$

3. **Długość krzywej**: Długość krzywej $y = f(x)$ na przedziale $[a,b]$ wynosi:
$$
L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx
$$

### Zastosowania w ekonomii

1. **Funkcja kosztu krańcowego**: Jeśli $C'(x)$ jest kosztem krańcowym produkcji $x$ jednostek towaru, to całkowity koszt produkcji wynosi:
$$
C(x) = C(0) + \int_0^x C'(t)\,dt
$$

2. **Nadwyżka konsumenta**: Nadwyżka konsumenta dla funkcji popytu $D(p)$ przy cenie równowagi $p_0$ wynosi:
$$
CS = \int_{p_0}^{\infty} D(p)\,dp
$$

3. **Nadwyżka producenta**: Nadwyżka producenta dla funkcji podaży $S(p)$ przy cenie równowagi $p_0$ wynosi:
$$
PS = \int_0^{p_0} [p_0 - S^{-1}(q)]\,dq
$$

### Zastosowania w prawdopodobieństwie i statystyce

1. **Dystrybuanta**: Dla zmiennej losowej o gęstości prawdopodobieństwa $f(x)$, dystrybuanta wynosi:
$$
F(x) = P(X \leq x) = \int_{-\infty}^x f(t)\,dt
$$

2. **Wartość oczekiwana**: Wartość oczekiwana zmiennej losowej o gęstości $f(x)$ wynosi:
$$
E(X) = \int_{-\infty}^{\infty} x \cdot f(x)\,dx
$$

3. **Wariancja**: Wariancja zmiennej losowej wynosi:
$$
Var(X) = E(X^2) - [E(X)]^2 = \int_{-\infty}^{\infty} x^2 \cdot f(x)\,dx - \left[\int_{-\infty}^{\infty} x \cdot f(x)\,dx\right]^2
$$

## Całki podwójne i wielokrotne

### Całka podwójna

Całka podwójna funkcji $f(x,y)$ na obszarze $D$ jest zdefiniowana jako:

$$
\iint_D f(x,y)\,dA = \iint_D f(x,y)\,dx\,dy
$$

W praktyce, całkę podwójną często oblicza się jako całkę iterowaną:

$$
\iint_D f(x,y)\,dA = \int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\,dx
$$

lub

$$
\iint_D f(x,y)\,dA = \int_c^d \int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\,dy
$$

w zależności od opisu obszaru $D$.

#### Przykład
Obliczmy pole obszaru ograniczonego parabolami $y = x^2$ i $y = 2-x^2$

Krzywe przecinają się w punktach, dla których $x^2 = 2-x^2$, czyli $x = \pm 1$. Pole wynosi:

$$
A = \int_{-1}^1 \int_{x^2}^{2-x^2} 1\,dy\,dx = \int_{-1}^1 [(2-x^2) - x^2]\,dx = \int_{-1}^1 (2-2x^2)\,dx = [2x - \frac{2x^3}{3}]_{-1}^1 = 4 - \frac{4}{3} = \frac{8}{3}
$$

### Zamiana zmiennych w całkach podwójnych

Przy zamianie zmiennych z $(x,y)$ na $(u,v)$ za pomocą przekształcenia $x = x(u,v)$, $y = y(u,v)$, całka podwójna przybiera postać:

$$
\iint_D f(x,y)\,dx\,dy = \iint_{D'} f(x(u,v), y(u,v)) \cdot |J|\,du\,dv
$$

gdzie $|J|$ jest wartością bezwzględną jakobianu przekształcenia:

$$
J = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix} = \frac{\partial x}{\partial u} \cdot \frac{\partial y}{\partial v} - \frac{\partial x}{\partial v} \cdot \frac{\partial y}{\partial u}
$$

#### Współrzędne biegunowe

Szczególnie użyteczna jest zamiana na współrzędne biegunowe $(r,\theta)$, gdzie:
$$
x = r\cos\theta, \quad y = r\sin\theta, \quad r \geq 0, \quad \theta \in [0, 2\pi)
$$

Jakobian tego przekształcenia wynosi $|J| = r$, co daje:

$$
\iint_D f(x,y)\,dx\,dy = \iint_{D'} f(r\cos\theta, r\sin\theta) \cdot r\,dr\,d\theta
$$

#### Przykład
Obliczmy całkę $\iint_D (x^2 + y^2)\,dA$, gdzie $D$ jest kołem o środku w początku układu współrzędnych i promieniu $R$.

W współrzędnych biegunowych $x^2 + y^2 = r^2$ i obszar $D$ jest opisany przez $0 \leq r \leq R$, $0 \leq \theta < 2\pi$.

$$
\iint_D (x^2 + y^2)\,dA = \int_0^{2\pi} \int_0^R r^2 \cdot r\,dr\,d\theta = \int_0^{2\pi} \int_0^R r^3\,dr\,d\theta = \int_0^{2\pi} \left[\frac{r^4}{4}\right]_0^R\,d\theta = \int_0^{2\pi} \frac{R^4}{4}\,d\theta = \frac{R^4}{4} \cdot 2\pi = \frac{\pi R^4}{2}
$$

### Całki potrójne

Całka potrójna funkcji $f(x,y,z)$ na obszarze trójwymiarowym $V$ jest zdefiniowana jako:

$$
\iiint_V f(x,y,z)\,dV = \iiint_V f(x,y,z)\,dx\,dy\,dz
$$

W praktyce oblicza się ją jako całkę iterowaną, np.:

$$
\iiint_V f(x,y,z)\,dV = \int_a^b \int_{g_1(x)}^{g_2(x)} \int_{h_1(x,y)}^{h_2(x,y)} f(x,y,z)\,dz\,dy\,dx
$$

#### Zamiana zmiennych w całkach potrójnych

Przy zamianie zmiennych na $(u,v,w)$ całka potrójna przyjmuje postać:

$$
\iiint_V f(x,y,z)\,dV = \iiint_{V'} f(x(u,v,w), y(u,v,w), z(u,v,w)) \cdot |J|\,du\,dv\,dw
$$

gdzie $|J|$ jest wartością bezwzględną jakobianu przekształcenia.

#### Współrzędne walcowe

W współrzędnych walcowych $(r,\theta,z)$:
$$
x = r\cos\theta, \quad y = r\sin\theta, \quad z = z
$$

Jakobian wynosi $|J| = r$, co daje:

$$
\iiint_V f(x,y,z)\,dV = \iiint_{V'} f(r\cos\theta, r\sin\theta, z) \cdot r\,dr\,d\theta\,dz
$$

#### Współrzędne sferyczne

W współrzędnych sferycznych $(\rho,\theta,\phi)$:
$$
x = \rho\sin\phi\cos\theta, \quad y = \rho\sin\phi\sin\theta, \quad z = \rho\cos\phi
$$
gdzie $\rho \geq 0$, $\theta \in [0, 2\pi)$, $\phi \in [0, \pi]$

Jakobian wynosi $|J| = \rho^2\sin\phi$, co daje:

$$
\iiint_V f(x,y,z)\,dV = \iiint_{V'} f(\rho\sin\phi\cos\theta, \rho\sin\phi\sin\theta, \rho\cos\phi) \cdot \rho^2\sin\phi\,d\rho\,d\theta\,d\phi
$$

#### Przykład
Obliczmy objętość kuli o promieniu $R$ z centrum w początku układu współrzędnych.

W współrzędnych sferycznych kula jest opisana przez $0 \leq \rho \leq R$, $0 \leq \theta < 2\pi$, $0 \leq \phi \leq \pi$.

$$
V = \iiint_V 1\,dV = \int_0^{2\pi} \int_0^{\pi} \int_0^R \rho^2\sin\phi\,d\rho\,d\phi\,d\theta = \int_0^{2\pi} \int_0^{\pi} \left[\frac{\rho^3}{3}\right]_0^R \sin\phi\,d\phi\,d\theta = \frac{R^3}{3} \int_0^{2\pi} \int_0^{\pi} \sin\phi\,d\phi\,d\theta = \frac{R^3}{3} \int_0^{2\pi} [-\cos\phi]_0^{\pi}\,d\theta = \frac{R^3}{3} \int_0^{2\pi} 2\,d\theta = \frac{4\pi R^3}{3}
$$

## Całki krzywoliniowe

### Całka krzywoliniowa względem długości łuku

Całka krzywoliniowa pierwszego rodzaju (względem długości łuku) funkcji $f(x,y,z)$ wzdłuż krzywej $C$ jest zdefiniowana jako:

$$
\int_C f(x,y,z)\,ds
$$

Dla krzywej zadanej parametrycznie: $\mathbf{r}(t) = (x(t), y(t), z(t))$, $t \in [a,b]$, całka ta wynosi:

$$
\int_C f(x,y,z)\,ds = \int_a^b f(x(t), y(t), z(t)) \cdot \sqrt{[x'(t)]^2 + [y'(t)]^2 + [z'(t)]^2}\,dt
$$

#### Przykład
Obliczmy długość okręgu o promieniu $R$ z centrum w początku układu współrzędnych.

Okrąg można sparametryzować jako $x = R\cos t$, $y = R\sin t$, $z = 0$, $t \in [0, 2\pi]$.

$$
L = \int_C 1\,ds = \int_0^{2\pi} \sqrt{(-R\sin t)^2 + (R\cos t)^2 + 0^2}\,dt = \int_0^{2\pi} R\,dt = 2\pi R
$$

### Całka krzywoliniowa względem współrzędnych

Całka krzywoliniowa drugiego rodzaju (względem współrzędnych) pola wektorowego $\mathbf{F}(x,y,z) = (P(x,y,z), Q(x,y,z), R(x,y,z))$ wzdłuż krzywej $C$ jest zdefiniowana jako:

$$
\int_C \mathbf{F} \cdot d\mathbf{r} = \int_C P\,dx + Q\,dy + R\,dz
$$

Dla krzywej zadanej parametrycznie: $\mathbf{r}(t) = (x(t), y(t), z(t))$, $t \in [a,b]$, całka ta wynosi:

$$
\int_C P\,dx + Q\,dy + R\,dz = \int_a^b [P(x(t), y(t), z(t)) \cdot x'(t) + Q(x(t), y(t), z(t)) \cdot y'(t) + R(x(t), y(t), z(t)) \cdot z'(t)]\,dt
$$

#### Przykład
Obliczmy pracę wykonaną przez pole siły $\mathbf{F}(x,y) = (y, x)$ wzdłuż okręgu $x^2 + y^2 = 1$ w kierunku przeciwnym do ruchu wskazówek zegara.

Parametryzacja: $x = \cos t$, $y = \sin t$, $t \in [0, 2\pi]$.

$$
W = \int_C \mathbf{F} \cdot d\mathbf{r} = \int_C y\,dx + x\,dy = \int_0^{2\pi} [\sin t \cdot (-\sin t) + \cos t \cdot \cos t]\,dt
$$

$$
= \int_0^{2\pi} [\cos^2 t - \sin^2 t]\,dt = \int_0^{2\pi} \cos(2t)\,dt = [\frac{\sin(2t)}{2}]_0^{2\pi} = 0
$$

### Twierdzenie Greena

Twierdzenie Greena łączy całkę krzywoliniową po zamkniętej krzywej z całką podwójną po obszarze ograniczonym tą krzywą:

$$
\oint_C P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\,dx\,dy
$$

gdzie $C$ jest dodatnio zorientowaną (przeciwnie do ruchu wskazówek zegara) krzywą zamkniętą ograniczającą obszar $D$.

## Całki powierzchniowe

### Całka powierzchniowa pierwszego rodzaju

Całka powierzchniowa pierwszego rodzaju funkcji $f(x,y,z)$ po powierzchni $S$ jest zdefiniowana jako:

$$
\iint_S f(x,y,z)\,dS
$$

Dla powierzchni zadanej równaniem $z = g(x,y)$, $(x,y) \in D$, całka ta wynosi:

$$
\iint_S f(x,y,z)\,dS = \iint_D f(x,y,g(x,y)) \cdot \sqrt{1 + \left(\frac{\partial g}{\partial x}\right)^2 + \left(\frac{\partial g}{\partial y}\right)^2}\,dx\,dy
$$

#### Przykład
Obliczmy pole powierzchni sfery o promieniu $R$ z centrum w początku układu współrzędnych.

Górną półsferę można opisać równaniem $z = \sqrt{R^2 - x^2 - y^2}$, $(x,y) \in D$, gdzie $D$ jest kołem $x^2 + y^2 \leq R^2$.

$$
\frac{\partial z}{\partial x} = -\frac{x}{\sqrt{R^2 - x^2 - y^2}}, \quad \frac{\partial z}{\partial y} = -\frac{y}{\sqrt{R^2 - x^2 - y^2}}
$$

$$
1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2 = 1 + \frac{x^2}{R^2 - x^2 - y^2} + \frac{y^2}{R^2 - x^2 - y^2} = \frac{R^2}{R^2 - x^2 - y^2}
$$

Pole górnej półsfery:

$$
A_{górna} = \iint_D \sqrt{\frac{R^2}{R^2 - x^2 - y^2}}\,dx\,dy = \iint_D \frac{R}{\sqrt{R^2 - x^2 - y^2}}\,dx\,dy
$$

W współrzędnych biegunowych:

$$
A_{górna} = \int_0^{2\pi} \int_0^R \frac{R}{\sqrt{R^2 - r^2}} \cdot r\,dr\,d\theta = R \int_0^{2\pi} \int_0^R \frac{r}{\sqrt{R^2 - r^2}}\,dr\,d\theta = R \int_0^{2\pi} [-\sqrt{R^2 - r^2}]_0^R\,d\theta = R \int_0^{2\pi} (R - 0)\,d\theta = 2\pi R^2
$$

Całkowite pole sfery: $A = 2 \cdot A_{górna} = 4\pi R^2$

### Całka powierzchniowa drugiego rodzaju

Całka powierzchniowa drugiego rodzaju pola wektorowego $\mathbf{F}(x,y,z) = (P(x,y,z), Q(x,y,z), R(x,y,z))$ po zorientowanej powierzchni $S$ jest zdefiniowana jako:

$$
\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S P\,dy\,dz + Q\,dz\,dx + R\,dx\,dy
$$

gdzie $d\mathbf{S}$ jest elementem wektora normalnego do powierzchni.

Dla powierzchni zadanej równaniem $z = g(x,y)$, $(x,y) \in D$, z orientacją zgodną z dodatnim kierunkiem osi $z$, całka ta wynosi:

$$
\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \left[-P(x,y,g(x,y)) \cdot \frac{\partial g}{\partial x} - Q(x,y,g(x,y)) \cdot \frac{\partial g}{\partial y} + R(x,y,g(x,y))\right]\,dx\,dy
$$

## Twierdzenia całkowe analizy wektorowej

### Twierdzenie Stokesa

Twierdzenie Stokesa łączy całkę krzywoliniową po zamkniętej krzywej $C$ z całką powierzchniową po dowolnej powierzchni $S$ ograniczonej tą krzywą:

$$
\oint_C \mathbf{F} \cdot d\mathbf{r} = \iint_S \text{rot}\,\mathbf{F} \cdot d\mathbf{S}
$$

gdzie $\text{rot}\,\mathbf{F} = \nabla \times \mathbf{F}$ jest rotacją pola wektorowego $\mathbf{F}$.

### Twierdzenie Gaussa (twierdzenie o dywergencji)

Twierdzenie Gaussa łączy całkę powierzchniową po zamkniętej powierzchni $S$ z całką potrójną po obszarze $V$ ograniczonym tą powierzchnią:

$$
\oint_S \mathbf{F} \cdot d\mathbf{S} = \iiint_V \text{div}\,\mathbf{F}\,dV
$$

gdzie $\text{div}\,\mathbf{F} = \nabla \cdot \mathbf{F}$ jest dywergencją pola wektorowego $\mathbf{F}$.

### Zastosowania twierdzeń całkowych

1. **Elektrodynamika**: Równania Maxwella często formułuje się przy użyciu całek powierzchniowych i objętościowych oraz twierdzeń Stokesa i Gaussa.

2. **Mechanika płynów**: Równanie ciągłości i równanie Naviera-Stokesa opisują zachowanie płynów przy użyciu dywergencji i rotacji pól wektorowych.

3. **Analiza pól**: Twierdzenia całkowe pozwalają badać własności pól wektorowych, takie jak potencjalność (zachowawczość) pola.

## Zadania z rozwiązaniami

### Zadanie 1: Całka nieoznaczona

Oblicz całkę $\int \frac{x^2 + 1}{x}\,dx$.

**Rozwiązanie:**

Przekształćmy całkę:
$$
\int \frac{x^2 + 1}{x}\,dx = \int \left(x + \frac{1}{x}\right)\,dx = \int x\,dx + \int \frac{1}{x}\,dx = \frac{x^2}{2} + \ln|x| + C
$$

### Zadanie 2: Całkowanie przez części

Oblicz całkę $\int x \cdot \ln x\,dx$.

**Rozwiązanie:**

Zastosujmy wzór na całkowanie przez części: $\int u\,dv = u \cdot v - \int v\,du$

Przyjmijmy:
$u = \ln x$, wtedy $du = \frac{1}{x}\,dx$
$dv = x\,dx$, wtedy $v = \frac{x^2}{2}$

$$
\int x \cdot \ln x\,dx = \ln x \cdot \frac{x^2}{2} - \int \frac{x^2}{2} \cdot \frac{1}{x}\,dx = \frac{x^2 \ln x}{2} - \int \frac{x}{2}\,dx = \frac{x^2 \ln x}{2} - \frac{x^2}{4} + C = \frac{x^2 \ln x}{2} - \frac{x^2}{4} + C
$$

### Zadanie 3: Całkowanie funkcji wymiernej

Oblicz całkę $\int \frac{2x-5}{(x-1)(x-2)}\,dx$.

**Rozwiązanie:**

Rozkładamy funkcję wymierną na ułamki proste:
$$
\frac{2x-5}{(x-1)(x-2)} = \frac{A}{x-1} + \frac{B}{x-2}
$$

Po sprowadzeniu do wspólnego mianownika:
$$
\frac{2x-5}{(x-1)(x-2)} = \frac{A(x-2) + B(x-1)}{(x-1)(x-2)}
$$

Porównując liczniki:
$$
2x-5 = A(x-2) + B(x-1) = Ax - 2A + Bx - B = (A+B)x - (2A+B)
$$

Stąd:
$$
A+B = 2
$$
$$
2A+B = 5
$$

Rozwiązując układ równań: $A = 3$, $B = -1$

Zatem:
$$
\int \frac{2x-5}{(x-1)(x-2)}\,dx = \int \left(\frac{3}{x-1} - \frac{1}{x-2}\right)\,dx = 3\ln|x-1| - \ln|x-2| + C = \ln|x-1|^3 - \ln|x-2| + C = \ln\left|\frac{(x-1)^3}{x-2}\right| + C
$$

### Zadanie 4: Całka oznaczona

Oblicz całkę $\int_0^1 x^3(1-x)^2\,dx$.

**Rozwiązanie:**

Rozwijamy $(1-x)^2 = 1 - 2x + x^2$:
$$
\int_0^1 x^3(1-x)^2\,dx = \int_0^1 x^3(1 - 2x + x^2)\,dx = \int_0^1 (x^3 - 2x^4 + x^5)\,dx
$$

$$
= \left[\frac{x^4}{4} - \frac{2x^5}{5} + \frac{x^6}{6}\right]_0^1 = \frac{1}{4} - \frac{2}{5} + \frac{1}{6} = \frac{15-24+10}{60} = \frac{1}{60}
$$

### Zadanie 5: Całka niewłaściwa

Zbadać zbieżność całki $\int_1^{\infty} \frac{dx}{x^p}$ w zależności od parametru $p$.

**Rozwiązanie:**

$$
\int_1^{\infty} \frac{dx}{x^p} = \lim_{b \to \infty} \int_1^b \frac{dx}{x^p} = \lim_{b \to \infty} \left[\frac{x^{-p+1}}{-p+1}\right]_1^b = \lim_{b \to \infty} \left(\frac{b^{-p+1}}{-p+1} - \frac{1}{-p+1}\right) = \lim_{b \to \infty} \frac{1}{-p+1} \cdot (b^{-p+1} - 1)
$$

Dla $p > 1$: $-p+1 < 0$, więc $\lim_{b \to \infty} b^{-p+1} = 0$, co daje $\int_1^{\infty} \frac{dx}{x^p} = \frac{1}{p-1}$. Całka jest zbieżna.

Dla $p \leq 1$: $-p+1 \geq 0$, więc $\lim_{b \to \infty} b^{-p+1} = \infty$ dla $p < 1$ lub $\lim_{b \to \infty} b^{-p+1} = b^0 = 1$ dla $p = 1$. W obu przypadkach całka jest rozbieżna.

Odpowiedź: Całka $\int_1^{\infty} \frac{dx}{x^p}$ jest zbieżna wtedy i tylko wtedy, gdy $p > 1$.

### Zadanie 6: Pole obszaru

Oblicz pole obszaru ograniczonego krzywymi $y = x^2$ i $y = 2x - x^2$.

**Rozwiązanie:**

Najpierw znajdźmy punkty przecięcia krzywych, rozwiązując układ równań:
$$
x^2 = 2x - x^2
$$
$$
2x^2 = 2x
$$
$$
x^2 = x
$$
$$
x(x-1) = 0
$$

Rozwiązania: $x = 0$ i $x = 1$

Pole obszaru:
$$
A = \int_0^1 [(2x - x^2) - x^2]\,dx = \int_0^1 (2x - 2x^2)\,dx = \left[x^2 - \frac{2x^3}{3}\right]_0^1 = 1 - \frac{2}{3} = \frac{1}{3}
$$

### Zadanie 7: Długość krzywej

Oblicz długość krzywej $y = \ln(\cos x)$ dla $x \in [0, \frac{\pi}{4}]$.

**Rozwiązanie:**

$$
y' = \frac{d}{dx}[\ln(\cos x)] = \frac{1}{\cos x} \cdot (-\sin x) = -\tan x
$$

Długość krzywej:
$$
L = \int_0^{\pi/4} \sqrt{1 + (y')^2}\,dx = \int_0^{\pi/4} \sqrt{1 + \tan^2 x}\,dx = \int_0^{\pi/4} \sqrt{\frac{1}{\cos^2 x}}\,dx = \int_0^{\pi/4} \frac{1}{|\cos x|}\,dx
$$

Ponieważ $\cos x > 0$ dla $x \in [0, \frac{\pi}{4}]$:
$$
L = \int_0^{\pi/4} \frac{1}{\cos x}\,dx = \int_0^{\pi/4} \sec x\,dx = \ln|\sec x + \tan x|_0^{\pi/4}
$$

$$
= \ln|\sec(\pi/4) + \tan(\pi/4)| - \ln|\sec(0) + \tan(0)| = \ln|\sqrt{2} + 1| - \ln|1 + 0| = \ln(\sqrt{2} + 1)
$$

### Zadanie 8: Objętość bryły obrotowej

Oblicz objętość bryły powstałej przez obrót obszaru ograniczonego krzywymi $y = x^2$ i $y = 4$ wokół osi OX.

**Rozwiązanie:**

Punkty przecięcia krzywych: $x^2 = 4 \implies x = \pm 2$

Objętość bryły:
$$
V = \pi \int_{-2}^2 (4 - x^2)^2\,dx = \pi \int_{-2}^2 (16 - 8x^2 + x^4)\,dx
$$

Z uwagi na parzystość funkcji podcałkowej:
$$
V = 2\pi \int_0^2 (16 - 8x^2 + x^4)\,dx = 2\pi \left[16x - \frac{8x^3}{3} + \frac{x^5}{5}\right]_0^2 = 2\pi \left(32 - \frac{64}{3} + \frac{32}{5}\right) = 2\pi \cdot \frac{480 - 320 + 192}{60} = 2\pi \cdot \frac{352}{60} = \frac{352\pi}{30}
$$

### Zadanie 9: Całka podwójna

Oblicz $\iint_D xy\,dA$, gdzie $D$ jest obszarem ograniczonym krzywymi $y = x^2$ i $y = x + 2$.

**Rozwiązanie:**

Punkty przecięcia krzywych: $x^2 = x + 2 \implies x^2 - x - 2 = 0 \implies (x-2)(x+1) = 0 \implies x = 2$ lub $x = -1$

$$
\iint_D xy\,dA = \int_{-1}^2 \int_{x^2}^{x+2} xy\,dy\,dx = \int_{-1}^2 x \left[\frac{y^2}{2}\right]_{x^2}^{x+2}\,dx = \int_{-1}^2 x \cdot \frac{(x+2)^2 - (x^2)^2}{2}\,dx = \int_{-1}^2 \frac{x[(x+2)^2 - x^4]}{2}\,dx = \int_{-1}^2 \frac{x(x^2 + 4x + 4 - x^4)}{2}\,dx = \int_{-1}^2 \frac{-x^5 + x^3 + 4x^2 + 4x}{2}\,dx = \frac{1}{2}\left[-\frac{x^6}{6} + \frac{x^4}{4} + \frac{4x^3}{3} + 2x^2\right]_{-1}^2 = \frac{1}{2}\left[\left(-\frac{64}{6} + \frac{16}{4} + \frac{32}{3} + 8\right) - \left(-\frac{1}{6} + \frac{1}{4} - \frac{4}{3} + 2\right)\right]
$$

Po obliczeniu:
$$
= \frac{1}{2} \cdot \frac{45}{4} = \frac{45}{8}
$$

### Zadanie 10: Całka krzywoliniowa

Oblicz całkę krzywoliniową $\int_C (x^2 - y^2)\,dx + 2xy\,dy$, gdzie $C$ jest okręgiem $x^2 + y^2 = 1$ przebieganym w kierunku przeciwnym do ruchu wskazówek zegara.

**Rozwiązanie:**

Sprawdźmy, czy pole jest potencjalne:
$$
\frac{\partial}{\partial y}(x^2 - y^2) = -2y
$$
$$
\frac{\partial}{\partial x}(2xy) = 2y
$$

Ponieważ $-2y \neq 2y$, pole nie jest potencjalne.

Zastosujmy twierdzenie Greena:
$$
\oint_C (x^2 - y^2)\,dx + 2xy\,dy = \iint_D \left(\frac{\partial (2xy)}{\partial x} - \frac{\partial (x^2 - y^2)}{\partial y}\right)\,dA = \iint_D (2y - (-2y))\,dA = \iint_D 4y\,dA
$$

Obszar $D$ to koło jednostkowe. Ze względu na nieparzystość funkcji $4y$ względem $y$:
$$
\iint_D 4y\,dA = 0
$$