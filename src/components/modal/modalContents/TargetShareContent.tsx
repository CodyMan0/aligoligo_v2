import UrlIcon from '@/assets/icons/urlIcon.svg';
import KakaoSharingIcon from '@/assets/icons/kakao-sharing-icon.svg';
import { Button } from '@/components/common';

export const TargetShareContent = () => {
  return (
    <>
      <Button>
        <UrlIcon />
        url 공유
      </Button>
      <Button>
        <KakaoSharingIcon />
        카카오톡 공유
      </Button>
    </>
  );
};

TargetShareContent.display = 'TargetShareContent';
