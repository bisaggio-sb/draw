# Losowanie grup – Mölkky

To prosta aplikacja webowa służąca do przeprowadzania losowań grup podczas turniejów Mölkky.

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

**Aplikacja powstała na potrzeby Polskiej Federacji Mölkky i pozostaje dla niej
bezpłatna.** PFM oraz lokalne ligi i turnieje Mölkky w Polsce mogą z niej
korzystać bez opłat i bezterminowo, a ewentualne wypowiedzenie wymaga
sześciomiesięcznego okresu — tak, by nigdy nie przerwać trwającego sezonu.

Kod jest udostępniony publicznie do wglądu, ale **nie jest oprogramowaniem
open source**. Modyfikowanie, rozpowszechnianie i uruchamianie własnych wdrożeń
wymaga pisemnej zgody autora, a zastosowania komercyjne — odrębnej umowy.

Osobno zabezpieczona jest ciągłość rozgrywek: **Federacja może w każdej chwili
trzymać własną kopię** aplikacji, a gdyby wdrożenie autora przestało działać
(albo autor przestał projekt utrzymywać) — uruchomić ją samodzielnie, bez
pytania o zgodę. Warunki opisuje punkt 1a licencji.

Herb w nagłówku aplikacji to **logo Polskiej Federacji Mölkky i jest własnością
Federacji** — aplikacja działa obecnie w wersji przygotowanej dla PFM i używa
go do jej oznaczenia. Logotypy klubów należą do poszczególnych klubów. Ani logo
Federacji, ani herby klubów **nie są objęte tą licencją** i licencja nie udziela
do nich żadnych praw.

Pełne warunki: [LICENSE](LICENSE).
