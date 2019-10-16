export const STORAGE_KEY = 'currentTask';

export const DATA = [{
  id: 'a497c61e-a3af-47cc-bec0-7d79a7493e65',
  question: 'Для идентифиации ответте на вопрос. Сколько мемберов в группе BTS?',
  answer: '7',
}, {
  id: '6e864f80-6a87-4301-ba40-0e51b7a3eacc',
  question: 'Привет, Маша. Я КотоБот. Поздравляю тебя с днем Рождения! Постарайся отвечать на мои вопросы правильно и возможно ты что-нибудь найдешь. Понятно?',
  answer: 'Да',
}, {
  id: 'bda3a707-8027-4b60-bddd-c28dfc3ee6ee',
  question: 'Для того чтобы правильно ответить на большинство вопросов, тебе нужно оказаться в определенном месте. Используй для этого Яндекс Карты и родителей с машиной. Начать?',
  answer: 'Да',
}, {
  id: '617578f0-a971-4f41-9447-e2ea95f43f96',
  question: 'Улица Октябрьская 16к27 . Рядом со зданием есть больщая черная скамейка. Что такое BRAZIL?',
  answer: 'VULICA',
}, {
  id: 'af00c064-a004-41cc-b086-f787968da639',
  question: 'Октябрьская 25. На углу здания стоят мусорные контейнеры. Над контейнерами очередь. Что держит в руке четвертый в очерди?',
  answer: 'Палку',
}, {
  id: 'a8843ed1-b7f8-43a3-8bb8-f5a2e05b6bde',
  question: 'Октябрьская 19к3. Сколько зонтиков у кафэ "Volki Grill"?',
  answer: '4',
}, {
  id: '99e9d133-cb9b-4f5f-ae85-3e65ac466062',
  question: 'Поздравляю Маша!!! Ты ответила правильно на первые три вопроса и получаеш первую коробку с сюрпризом! Продолжить',
  answer: 'Да',
}, {
  id: '0e3089c4-a36d-42bb-b26b-dee102f29934',
  question: 'Ул Октябрьская 16 к 22 На стене строения есть окна с яблоками. Сколько нехватает яблок в окнах?',
  answer: '3',
}, {
  id: 'bbdd346f-52f3-44fb-a9f9-91d5b867c9db',
  question: 'Найди рядом старка с гуслями. Сколько струн в гуслях?',
  answer: '6',
}, {
  id: 'c2bb869b-c5b3-4e99-a210-5f6ebf731055',
  question: 'Октябрьская 14к1 Памятник советским партиотам. Как фамилия самого смелого патриота?',
  answer: 'Трус',
}, {
  id: '314e51ae-9428-4f3e-93ac-49cbaf49a3d4',
  question: 'Поздравляю. Первое задание выполнено. Ключ откроет ящик  в магазине Рублевский в ТЦ Ленинград по ул Ленина  27.  Продолжить ?',
  answer: 'Да',
}];

export function getCurrentTask() {
  try {
    const encodedTaskId = window.localStorage.getItem(STORAGE_KEY);
    const decodedTaskId = atob(encodedTaskId);
    const task = DATA.find(item => item.id === decodedTaskId);
    return task || null;
  } finally {
    return null;
  }
}

export function setCurrentTask(taskId) {
  if (DATA.some(item => item.id === taskId)) {
    const encodedTaskId = btoa(taskId);
    window.localStorage.setItem(STORAGE_KEY, encodedTaskId);
  }
}

if (!getCurrentTask()) {
  setCurrentTask(DATA[0].id);
}
