// src/app/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pastebin } from "@/components/Pastebin";

export default function Home() {
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    const response = await fetch('/api/paste', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    const { id } = await response.json();
    router.push(`/paste/${id}`);
  };

  return (<Pastebin handleSubmit={handleSubmit} value={content} setValue={setContent} />);
}

