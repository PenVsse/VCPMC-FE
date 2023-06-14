import { Suspense } from "react";
import Router from "./router/Router";

function App() {

  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );
}

export default App;
