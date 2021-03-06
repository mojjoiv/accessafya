import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'
import Nav from './pages/Nav'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          {/* <Header /> */}
          <NavBar/>
          <br/>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/newui' element={<Home2 />} />
              <Route path='/nav' element={<Nav />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer/>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
