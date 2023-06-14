import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import SpinnerPage from "./components/SpinnerPage/index.tsx";

// css
import './styles/core.scss';
import { ConfigProvider } from "antd";
import theme from "./theme/index.ts";

const LazyApp = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <ConfigProvider theme={theme}>
        <Suspense fallback={<SpinnerPage/>}>
          <LazyApp />
        </Suspense>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>,
);
