// src/services/localNotifications.ts
import { LocalNotifications } from '@capacitor/local-notifications';

export const scheduleNotification = async () => {
  await LocalNotifications.requestPermissions();
  await LocalNotifications.schedule({
    notifications: [
      {
        id: 1,
        title: "یادآوری",
        body: "وقت مطالعه‌ست!",
        schedule: { at: new Date(new Date().getTime() + 1000 * 60) }, // 1 دقیقه بعد
        sound: '',
        attachments: [],
        extra: { foo: 'bar' },
      }
    ]
  });
};

export const listenNotificationAction = () => {
  LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
    console.log('دکمهٔ نوتیف فشرده شد:', notification);
    // اینجا مثلاً هدایت به صفحه‌ای در اپ
  });
};
