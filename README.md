# Losowanie grup – Polska Federacja Mölkky

To prosta aplikacja webowa służąca do przeprowadzania losowań grup podczas turniejów organizowanych przez Polską Federację Mölkky.

#### Funkcje:
- Losowanie zawodników do grup na podstawie wprowadzonego seeda (hasła) i "koszyków".
- Zachowanie powtarzalności losowania dzięki zapisowi seeda i "soli", umożliwiając audyt i odtworzenie wyników.
- Eksport wyników do Excela (TSV) oraz logu przebiegu losowania.
- Prosty interfejs użytkownika całkowicie w przeglądarce – **nie wymaga serwera**.
- Formularze dla kluczowych parametrów: seed, liczba grup, dane wejściowe.
- Przyciski umożliwiające powtarzanie i przechodzenie krok po kroku.

#### Podgląd działania:
- Wersja produkcyjna dostępna na:  
  [https://bisaggio-sb.github.io/draw/](https://bisaggio-sb.github.io/draw/)

- Podgląd zmian deweloperskich:  
  [https://bisaggio-sb.github.io/draw/test-preview/](https://bisaggio-sb.github.io/draw/test-preview/)

---

**Jak korzystać:**
1. Wklej zawodników w odpowiednim formacie z Excela do pola "Koszyki" (w formacie przeklejonym z Excela turniejowego- kolumny P i Q w zakładce "Losowanie")
2. Ustaw seed (np. nazwę wydarzenia).
3. Wybierz liczbę grup.
4. Kliknij „Start / Reset”, a następnie prowadź losowanie.
5. Wyniki możesz skopiować lub wyeksportować.

---

Aplikacja działa na czystym HTML + JS + CSS, nie wymaga backendu ani instalacji narzędzi. 
 

---

## Licencja

Copyright © 2026 Sebastian Bisaga. Wszelkie prawa zastrzeżone.

Kod jest udostępniony publicznie do wglądu, ale **nie jest oprogramowaniem
open source**. Bezpłatne korzystanie obejmuje turnieje Polskiej Federacji
Mölkky oraz lokalne ligi i turnieje Mölkky w Polsce. Modyfikowanie,
rozpowszechnianie i uruchamianie własnych wdrożeń wymaga pisemnej zgody
autora, a zastosowania komercyjne — odrębnej umowy.

Logo Polskiej Federacji Mölkky oraz logotypy klubów **nie są objęte tą
licencją** i pozostają własnością odpowiednich podmiotów.

Pełne warunki: [LICENSE](LICENSE).
