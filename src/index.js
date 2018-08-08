import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';

const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjkcny8e10kqz01fhwlwy3v6s/master'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>
	,document.getElementById('root'));
registerServiceWorker();
