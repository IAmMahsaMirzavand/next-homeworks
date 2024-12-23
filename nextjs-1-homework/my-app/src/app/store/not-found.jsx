import React from 'react';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    //   height: '100vh', 
    //   width: '100vw',
      overflow: 'hidden', 
      margin: 0, 
      padding: 0,
    },
    text: {
      fontSize: '2rem', 
      marginBottom: '20px', 
    },
    gif: {
      width: '500px', 
      height: '400px',
    },
  };

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>404-Not Found</h1>
      <img 
        src="/2T3M.gif" 
        alt="not-img" 
        style={styles.gif}
      />
    </div>
  );
}




// export default function NotFound() {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '20%' }}>
//       <h1>404 - Product Not Found</h1>
//     </div>
//   );
// }
