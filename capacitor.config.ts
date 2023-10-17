import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.questions.app',
  appName: 'questions',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
