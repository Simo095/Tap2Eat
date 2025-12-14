# Menu QR App - Ordina dal Tavolo

Tap2Eat è progettata per la gestione delle comande di un locale tramite QR code.
I clienti possono visualizzare un menu digitale, aggiungere piatti al carrello e generare un QR code da mostrare alla cassa per completare l'ordine.

---

## Tecnologie Utilizzate

- **React** (Next.js compatibile)
- **TypeScript**
- **Redux Toolkit** (per la gestione dello stato globale)
- **Redux Persist** (per la persistenza del carrello)
- **React Bootstrap** (per la UI e i modali)
- **React Icons** (icone moderne e intuitive)
- **React QR Code** (per la generazione dei QR code)

---

## Struttura del Progetto

src/
├── components/
│ ├── ModalQR.tsx # Modale per mostrare QR code
│ ├── ModalCancel.tsx # Modale per confermare uscita e cancellazione carrello
│ └── …
├── asset/
│ └── img/
│ └── scanqr.png # Icona “scansiona QR”
├── redux/
│ ├──stores
│ └── store.ts # Configurazione Redux store
│ └── slices
│ └──cartSlice.ts # Stato e azioni relative al carrello e al menu
├── types/
│ ├── props.ts # Tipizzazioni delle props dei componenti
│ └── state.ts # Tipizzazione dello store Redux
├── pages/
│ ├── api # Endpoint Vercel per la modifica del menù da mostrare
│ └── …

# Funzionalità Principali

• ✅ Aggiunta di piatti al carrello
• 🔁 Rilevamento di piatti ripetuti
• 📲 Generazione dinamica di QR code
• 🧾 Interfaccia modale per gestione ordine
• ♻️ Persistenza del carrello con Redux Persist
• 🚫 Conferma cancellazione con avviso modale

# Configurazione Redux

Il cartSlice.ts contiene la logica per:
• Aggiungere/rimuovere piatti al carrello
• Calcolare quantità totale
• Gestire piatti duplicati (repeatedDishStateProp)

Il menuSlice.ts contiene la logica per:
• Aggiungere/rimuovere menù tramite api Vercel interfaaciato con Farzhan
• Gestire i reparti per creare un pulsante per goni reparto per avere uno scroll diretto a tale reparto

Lo stato è tipizzato tramite RootState in types/state.ts.

# Licenza

Questo progetto è di proprietà di SDC-Web

# Autore

Sviluppato da Simone D'Angelo (Github: Simo095)
