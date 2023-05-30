import "./styles.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from "react-helmet-async";
import { alogliaSearchClient } from "app/algolia";
import { InstantSearch } from 'react-instantsearch-dom'
import ErrorBoundary from "app/containers/ErrorBoundary/ErrorBoundary";
import Toasts from "app/components/ui/Toasts/Toasts";
import ContextAppProvider from "StoreContext";
import { AppContainer } from "app/containers/AppContainer/AppContainer";

export default function App() {
  return (
    <HelmetProvider>
        <Router>
            <ErrorBoundary>
                <ContextAppProvider>
                    <InstantSearch 
                      indexName='invoice_index' 
                      searchClient={alogliaSearchClient}
                    >
                          <AppContainer />
                          <Toasts />      
                    </InstantSearch>
                </ContextAppProvider>
            </ErrorBoundary>
        </Router>
    </HelmetProvider>
  );
}
