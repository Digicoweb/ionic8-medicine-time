import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ir.hrp7dev.medicineTime',
  appName: 'وقت دارو',
  webDir: 'dist',
  plugins: {
    App: {
      disableBackButtonHandler: false,
    },
  },
};

export default config;
