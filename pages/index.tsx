import React from 'react';
import Link from 'next/link';

const RoomList = () => {
  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5']; // Пример списка комнат

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Добро пожаловать в FocusSync</h1>
      <p>Выберите комнату для совместной фокусировки:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {rooms.map((room, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {/* Просто передаем текст напрямую в Link */}
            <Link href={`/room?roomId=${encodeURIComponent(room)}`}>
              {room}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
