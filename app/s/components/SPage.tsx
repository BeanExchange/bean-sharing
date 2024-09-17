'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const redirectUrl = 'https://devnet.bean.exchange'


const SPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace(redirectUrl)
  }, []);

  return null
};

export default SPage;