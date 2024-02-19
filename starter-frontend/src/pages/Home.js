import { useEffect, useState } from 'react';
import backgroundImage from "./cool-background.png";

function HomePage() {
  return (
    <>
      <main className='d-flex flex-column flex-md-row w-100 vh-100'>
        <img src={backgroundImage} alt='background' className='z-n1 position-absolute vh-100 w-100' />
        <section className='w-50 m-5 z-3'>
          <h1 className='display-4 mt-4'>Bringing that *dawg* to games.</h1>
          <h2 className='display-6 mt-2'>And making them cool, at that.</h2>
          <a href='/games' role='button' className='btn btn-primary mt-2'>Get Started &rarr;</a>
        </section>
      </main>
    </>
  );
}

export default HomePage;