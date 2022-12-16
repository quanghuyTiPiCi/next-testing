import LoadingCustomize from '../components/Loading';
import LogoSlider from '../components/LogoSlider';
import { Facebook } from '../facebook';

export default function Home() {
  return (
    <div
    // style={{ display: 'flex', flexDirection: 'column', gap: '0px 0' }}
    >
      <LoadingCustomize size={7} />
      <LogoSlider />
      <Facebook />
    </div>
  );
}
