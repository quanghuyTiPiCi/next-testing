import '../assets/styles.css';
import '../assets/styles.scss';
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
