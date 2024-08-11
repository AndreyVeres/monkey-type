import { MainPage } from './pages/MainPage';
import { AppStore } from './providers/StoreProvider/AppStore';
import { AppTheme } from './providers/ThemeProvider/AppTheme';

export const App = () => (
  <AppTheme>
    <AppStore>
      <MainPage />
    </AppStore>
  </AppTheme>
);
