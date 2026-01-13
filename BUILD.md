# Build Instructions

## Prerequisites

Install dependencies:
```bash
npm install
```

## Building

### Build for current platform:
```bash
npm run build
```

### Build for specific platform:

**Windows:**
```bash
npm run build:win
```

**Linux:**
```bash
npm run build:linux
```

**macOS:**
```bash
npm run build:mac
```

### Build for all platforms:
```bash
npm run build:all
```

## Output

Built executables will be in the `dist/` directory:

- **Windows**: `Hytale F2P Launcher Setup.exe` (NSIS installer) and `Hytale F2P Launcher.exe` (portable)
- **Linux**: `Hytale F2P Launcher.AppImage` and `Hytale F2P Launcher.deb`
- **macOS**: `Hytale F2P Launcher.dmg` and `Hytale F2P Launcher.zip`

## Notes

- Icons need to be placed in `build/` directory:
  - `icon.ico` for Windows
  - `icon.png` for Linux
  - `icon.icns` for macOS
- To build for macOS on non-Mac systems, you'll need to run it on a Mac or use a CI/CD service

