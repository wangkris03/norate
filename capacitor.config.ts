import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'norate',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
