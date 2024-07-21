// src/app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pastebin } from "@/components/Pastebin.1";

export default function Home() {
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleForm = async (formData: FormData) => {
    const obj: { [key: string]: string } = {};
    formData.forEach((value, key) => { obj[key] = String(value); });

    const content = formData.get('pasteContent') as string;
    const expires = formData.get('expires') as string;
    const response = await fetch('/api/paste', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, expires }),
    });
    const { id } = await response.json();
    router.push(`/paste/${id}`);

  };

  return (<Pastebin value={content} setValue={setContent} handleForm={handleForm} />);
}

