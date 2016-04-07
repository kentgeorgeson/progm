import React from 'react';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>My Programs</h2>
      <nav>
        <a href="/">Programs</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main>
      {content}
    </main>
    <footer>
      
    </footer>
  </div>
)
