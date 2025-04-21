// Начнем с базовой структуры Next.js приложения
// pages/index.tsx - главная страница с таймером и списком комнат

import { useState } from 'react';

export default function Home() {
  const [room, setRoom] = useState('');
  const [timer, setTimer] = useState(25 * 60); // 25 минут
  const [isRunning, setIsRunning] = useState(false);

  const rooms = ['Комната 1', 'Комната 2', 'Комната 3', 'Комната 4', 'Комната 5'];

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">FocusSync — Совместная работа</h1>

      <div className="mb-4">
        <p className="text-xl">Таймер: {Math.floor(timer / 60)}:{('0' + timer % 60).slice(-2)}</p>
        {!isRunning ? (
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded" onClick={handleStart}>Старт</button>
        ) : (
          <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded" onClick={handleStop}>Стоп</button>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Выберите комнату:</h2>
        <ul className="flex gap-2">
          {rooms.map((r) => (
            <li key={r}>
              <button
                className={`px-3 py-1 rounded ${room === r ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setRoom(r)}>
                {r}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {room && (
        <div className="w-full max-w-md bg-white shadow rounded p-4">
          <h3 className="text-md font-bold mb-2">Мини-чат — {room}</h3>
          <div className="border p-2 h-40 overflow-y-scroll mb-2 bg-gray-100 rounded text-sm">
            <p>Пока сообщений нет...</p>
          </div>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Напишите сообщение... (не активно в MVP)"
            disabled
          />
        </div>
      )}
    </main>
  );
}
