import AdditionalDescription from '@/components/Home/AdditionalDescription';
import FirstDescription from '@/components/Home/FirstDescription';
import HomeCards from '@/components/Home/HomeCards';
import HomeContact from '@/components/Home/HomeCotact';
import SecondContent from '@/components/Home/SecondContent';

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
