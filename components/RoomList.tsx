import React from 'react';
import Link from 'next/link';

const RoomList = () => {
  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5']; // Пример списка комнат

  return (
    <div>
      <h2>Доступные комнаты</h2>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>
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
