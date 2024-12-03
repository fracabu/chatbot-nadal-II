# Nadal II - L'Elfo di Natale 🎄

Una divertente applicazione React che unisce una chat interattiva con temi natalizi, quiz personalizzabili, e una riproduzione musicale. L'app è progettata per offrire un'esperienza coinvolgente e immersiva con un'interfaccia interattiva e neve che cade per completare l'atmosfera festiva! ❄️

## Funzionalità principali

- **Chat interattiva:** Un sistema di messaggistica con storie e quiz.
- **Effetti visivi:** Neve animata grazie a `react-snowfall`.
- **Lettore musicale:** Riproduce tracce audio con controlli per play, pausa, avanti e indietro.
- **Barra di avanzamento audio:** Mostra il progresso del file audio e permette di navigare avanti e indietro.
- **Interfaccia moderna:** Design responsive e accattivante.

## Installazione

1. **Clona il repository:**

   ```bash
   git clone https://github.com/tuo-username/nadal-ii.git
   cd nadal-ii
   ```

2. **Installa le dipendenze:**

   ```bash
   npm install
   ```

3. **Avvia l'applicazione:**

   ```bash
   npm run dev
   ```

4. **Accedi all'app:**  
   L'app sarà disponibile all'indirizzo [http://localhost:5173](http://localhost:5173).

## Struttura del progetto

- `/src/components/`: Contiene i componenti principali come `ChatMessage`, `ChatInput`, e `TypingIndicator`.
- `/src/hooks/`: Contiene hook personalizzati, come `useChat`.
- `/src/utils/`: Include risorse come tracce audio, storie, quiz, e altre utility.

## Personalizzazione

### Aggiungere file audio
Inserisci i file audio nella directory `public/audio` e aggiorna la lista `tracks` in `App.tsx`.

```javascript
const tracks = [
  '/audio/track1.mp3',
  '/audio/track2.mp3',
  '/audio/track3.mp3',
];
```

### Aggiungere storie e quiz
Puoi aggiungere le tue storie e quiz personalizzati nei file presenti in `/src/utils/stories/` e `/src/utils/quiz/`.

### Configurazione visiva
Per modificare lo stile, aggiorna i file CSS o personalizza i componenti utilizzando classi Tailwind.

## Tecnologie utilizzate

- **React:** Framework per lo sviluppo frontend.
- **Vite:** Tool di sviluppo veloce e leggero per il bundling.
- **Tailwind CSS:** Framework CSS per uno stile moderno e responsivo.
- **Font Awesome:** Icone per migliorare l'interfaccia.
- **React Snowfall:** Effetto neve animata.
- **HTML5 Audio API:** Gestione dei file audio.

## Contributi

Contribuire al progetto è semplice! Ecco come puoi farlo:

1. Fai un fork del repository.
2. Crea un branch per le modifiche:

   ```bash
   git checkout -b feature-tua-modifica
   ```

3. Aggiungi le modifiche e fai un commit:

   ```bash
   git commit -m "Aggiunta di nuova funzionalità: tua-modifica"
   ```

4. Fai un push al branch:

   ```bash
   git push origin feature-tua-modifica
   ```

5. Crea una pull request.

## Licenza

Questo progetto è rilasciato sotto la licenza [MIT](LICENSE).

## Autore

Creato con ❤️ da **[fracabu - Francesco Capurso]**.  


### Screenshot

![image](https://github.com/user-attachments/assets/a13968c5-4dc4-4ffa-ab4c-816e31dec3fb)


