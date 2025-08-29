import React from 'react';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="My PDFs">
      <main style={{ padding: '2rem' }}>
        <h1>My Documents</h1>
        <ul>
          <li><a href="/pdfs/aa.pdf" target="_blank">PDF</a></li>
        </ul>
      </main>
    </Layout>
  );
}