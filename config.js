// =====================================================================
//  KONFIGURACJA ŚRODOWISKA
// =====================================================================
// groupStats: true  → statystyki pod grupami (mediana, średnia, ciekawostki,
//                     macierz klub×grupa). Włączone na produkcji i na dev/test.
//
// Historycznie ta flaga odróżniała main (false) od test-preview (true) i była
// jedyną różnicą między gałęziami. Od momentu włączenia statystyk na produkcji
// oba pliki są takie same — flaga zostaje jako wyłącznik, gdyby statystyki
// miały kiedyś zniknąć z produkcji.
//
// Uwaga: znaczek 🌱 (debiutant) NIE zależy od tej flagi — pokazuje się wszędzie,
// dopóki wczytany jest ranking.js.
const CONFIG = { groupStats: true };
