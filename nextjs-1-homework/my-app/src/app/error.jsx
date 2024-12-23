'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
          <h1>Something went wrong!</h1>
          <p>{error.message}</p>
          <button onClick={reset}>Try Again</button>
        </div>
      </body>
    </html>
  );
}
