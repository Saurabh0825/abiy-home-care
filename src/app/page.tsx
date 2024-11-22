import AdditionalDescription from '@/pages/Home/AdditionalDescription';
import FirstDescription from '@/pages/Home/FirstDescription';
import HomeCards from '@/pages/Home/HomeCards';
import HomeContact from '@/pages/Home/HomeCotact';
import SecondContent from '@/pages/Home/SecondContent';

export default function Home() {
  return (
    <div>
      <FirstDescription />
      <SecondContent />
      <HomeCards />
      <AdditionalDescription />
      <HomeContact />
    </div>
  );
}
