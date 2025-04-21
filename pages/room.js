// pages/room.js
import { useRouter } from 'next/router';

const Room = () => {
  const router = useRouter();
  const { roomId } = router.query; // Получаем ID комнаты из URL

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Комната: {roomId}</h1>
      <p>Добро пожаловать в комнату {roomId}. Здесь можно работать в фокусе!</p>
    </div>
  );
};

export default Room;
