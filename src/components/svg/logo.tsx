import type { SVGProps } from 'react';
import Image from 'next/image';

export function SuperteamSLLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <Image src="/ssl.png" alt="Superteam SL Logo" width={100} height={100} {...props} />
  );
}
