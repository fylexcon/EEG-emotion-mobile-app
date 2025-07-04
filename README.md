# EEG Emotion Prediction Mobile App 📱🧠

This is a React Native mobile interface built with Expo and TypeScript for predicting and visualizing emotional states from EEG signals.

---

## 🎯 Project Goal

To create an interactive mobile application that:
- Predicts **user emotions** based on EEG data
- Applies **dynamic themes** based on detected emotions
- Provides a **user-friendly interface** with real-time insights

---

## ✅ Current Features

- 🎨 Emotion-based theme switching (e.g., happy, angry, sad, neutral)
- 🧠 Main screen with 3 core actions:
  - **Current Emotion** (with dynamic theme change)
  - **Start New Analysis**
  - **View Past Analysis Reports**
- 🔗 Organized with `expo-router`
- 💡 Responsive and stylish UI using `LinearGradient`, custom fonts, and icon sets
- 🌙 Theme context logic implemented using React Context API

---

## 📦 Tech Stack

- **React Native + Expo**
- **TypeScript**
- `expo-router` for navigation
- `expo-font` for custom fonts
- `@expo/vector-icons` for icons
- `expo-linear-gradient` for gradients
- `ThemeContext` for emotion-based theming

---

## 🛠️ Coming Next

- 🔌 **API Integration** (FastAPI backend)
  - Connect to a backend API for sending EEG data
  - Receive predicted emotion and metadata
- 📂 **Dataset Handling**
  - Connect to an EEG dataset (e.g., DEAP or synthetic input)
  - Display predictions based on real/simulated input
- 📈 **History View**
  - Visualize past analyses with timestamps and summary charts
- 👤 **User Profiles (Optional)**

---

## 🚀 Setup

```bash
git clone https://github.com/fylexcon/EEG-emotion-mobile-app.git
cd EEG-emotion-mobile-app
npm install
npx expo start
