# Discord Bot Template with BotForge & TypeScript

Welcome to the **Discord Bot Template** powered by **BotForge** and **TypeScript**! This repository provides a structured and easy-to-use foundation for creating a Discord bot using BotForge's powerful features.

## 🚀 Features
- **BotForge Integration**
- **TypeScript Support**
- **Scalable Structure**
- **Easy to Clone & Customize**

## 📂 Project Structure
```
📦 DiscordAppTemplate
├── 📂 src
│   ├── 📂 App
│   │   ├── 📄 applications.d.ts
│   ├── 📂 Commands
│   │   ├── 📄 commands.d.ts
│   ├── 📄 functions.d.ts
│   ├── 📄 functions.ts
│   └── 📄 index.ts
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 .gitignore
└── 📄 README.md
```

## 🛠️ Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Striatp/DiscordAppTemplate.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure the bot:**
   - Add your **Discord bot token** inside a `.env` file:
   ```
   DISCORD_TOKEN=Your_Token_Here
   ```

4. **Compile TypeScript:**
   ```sh
   npx tsc
   ```
   _Run this command every time you add or modify a command to compile TypeScript._

5. **Start the bot:**
   ```sh
   node ./dist/index.js
   ```
    _Runs the compiled index.ts file._

## 📝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.
