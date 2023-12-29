import { TargetLayout } from '@/components/layouts/targetLayout';
import { Nav } from '@/components/sections/nav';

import StarBg from './startBg';

const Home = () => {
  const test = {
    name: 'juyoung',
  };
  return (
    <div className="relative">
      <Nav user={test} />
      <StarBg />
      <TargetLayout />
    </div>
  );
};

export default Home;
